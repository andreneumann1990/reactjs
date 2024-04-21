import { KeyboardEvent, useEffect, useRef } from 'react'
import Link from 'next/link'
import { isDebugEnabled, defaultIndexGroup, mainIndexGroup, sidenavIndexGroup, topnavIndexGroup } from '../../constants/parameters'
import { triggerFlashEffect } from '../../constants/events'
import { NullableBoolean } from '../../constants/types'
import { useGlobalStore, useSearchStore, useTopnavStore } from '../../hooks/stores'
import Search from '../atoms/Search'

export default Topnav
export { handleKeyDownInput as handleKeyInput_Topnav }

//TODO; check onFocusCapture again; set it inside the handleKeyDownInput function in layout??;

//
// parameters and variables
//

const sidenavQueryString = 'a, button'
const queryString = 'a:not([tabindex="-1"]), button:not([tabindex="-1"]), input:not([tabindex="-1"])'

//
// functions
//

function focusNextElement(): void {
    const searchState = useSearchStore.getState()
    const topnavState = useTopnavStore.getState()
    const topnavElement = topnavState.element
    if (topnavElement == null) return

    const focusedElement = document.activeElement as HTMLAnchorElement | null
    if (focusedElement == null) return
    const focusableElements = Array.from(topnavElement.querySelectorAll<HTMLElement>(queryString))
    const nextIndex = Math.min(focusableElements.indexOf(focusedElement) + 1, focusableElements.length - 1)

    const nextElement = focusableElements[nextIndex]
    if (searchState.resultsElement != null && searchState.resultsElement.contains(nextElement)) return
    nextElement?.focus()
}

function focusPreviousElement(): void {
    const topnavState = useTopnavStore.getState()
    const topnavElement = topnavState.element
    if (topnavElement == null) return
    const focusedElement = document.activeElement as HTMLElement | null

    if (focusedElement == null) return
    const focusableElements = Array.from(topnavElement.querySelectorAll<HTMLElement>(queryString))
    const previousIndex = Math.max(focusableElements.indexOf(focusedElement) - 1, 0)

    const previousElement = focusableElements[previousIndex]
    previousElement?.focus()
}

function handleKeyDownInput(event: KeyboardEvent): NullableBoolean {
    const { layoutState, sidenavState, topnavState } = useGlobalStore.getState()
    if (topnavState.element == null) return null
    if (!topnavState.element.contains(document.activeElement)) return null

    //TODO; this ignores things like opening the sidenav, where you still focus on the menu button;
    // it works for now because the tab index is set there differenctly; think about it again;
    if (layoutState.indexGroup !== topnavIndexGroup) {
        layoutState.setIndexGroup(topnavIndexGroup)
    }

    if (document.activeElement === topnavState.element) {
        if (event.key === 'Enter') {
            event.preventDefault()
            event.stopPropagation()
            topnavState.menuButtonElement?.focus()
            return false
        }
        return null
    }

    if (event.key === 'Escape') {
        event.preventDefault()
        layoutState.resetIndexGroup()
        topnavState.element?.focus()
        return false
    }

    if (document.activeElement === topnavState.menuButtonElement) {
        if (event.key === 'Enter') {
            event.preventDefault()
            event.stopPropagation()

            triggerFlashEffect(event)
            toggleSidenav()
            return false
        }

        if (event.key === 'ArrowDown') {
            event.preventDefault()
            event.stopPropagation()

            if (!sidenavState.isOpen) {
                toggleSidenav()
                return true
            }

            // for some reason repeating the down-arrow input skips the focus of the first 
            // element of the sidenav panel; jump directly to the first element when opening 
            // instead;
            const firstElement = sidenavState.element?.querySelector<HTMLElement>(sidenavQueryString)
            firstElement?.focus()
            return true
        }

        if ((event.key === 'ArrowLeft' || event.key === 'ArrowUp') && sidenavState.isOpen) {
            event.preventDefault()
            event.stopPropagation()

            toggleSidenav()
            triggerFlashEffect(event)
            return false
        }

        if (event.key === 'ArrowRight' && sidenavState.isOpen) {
            event.preventDefault()
            event.stopPropagation()

            toggleSidenav()
            triggerFlashEffect(event)
            return true
        }
    }

    if (document.activeElement === topnavState.homeLinkElement) {
        if (event.key === 'Enter') {
            triggerFlashEffect(event)
            return true
        }
    }

    if (event.key === 'ArrowLeft') {
        event.preventDefault()
        event.stopPropagation()
        focusPreviousElement()
        return true
    }

    if (event.key === 'ArrowRight') {
        event.preventDefault()
        event.stopPropagation()
        focusNextElement()
        return true
    }
    return null
}

function toggleSidenav(): void {
    const { layoutState, sidenavState, topnavState } = useGlobalStore.getState()
    if (isDebugEnabled) console.log('Topnav: Toggle sidenav.')

    if (!sidenavState.isOpen) {
        layoutState.setIndexGroup(sidenavIndexGroup)
    } else if (document.activeElement === topnavState.menuButtonElement) {
        layoutState.setIndexGroup(topnavIndexGroup)
    }
    sidenavState.setIsOpen(!sidenavState.isOpen)
}

//
// main
//

function Topnav() {
    //
    // parameters and variables
    //

    const { layoutState, sidenavState, topnavState } = useGlobalStore()

    const homeLinkRef = useRef<HTMLAnchorElement | null>(null)
    const menuIconRef = useRef<HTMLElement | null>(null)
    const closeIconRef = useRef<HTMLElement | null>(null)

    //
    // functions
    //

    const initializeMenuButtonReference = (element: HTMLButtonElement | null) => {
        if (topnavState.menuButtonElement != null) return
        if (element == null) return
        if (isDebugEnabled) console.log('Topnav: Initialize menu reference.')
        topnavState.setMenuButtonElement(element)
    }

    const initializeTopnavReference = (element: HTMLElement | null) => {
        if (topnavState.element != null) return
        if (element == null) return
        if (isDebugEnabled) console.log('Topnav: Initialize topbar reference.')
        topnavState.setElement(element)
    }

    function setActiveTabIndexGroupToTopnav() {
        console.log('focus') //TODO
        layoutState.setIndexGroup(topnavIndexGroup)
    }

    //
    // effects
    //

    // switch image for the sidenav toggle button;
    useEffect(() => {
        const menuButtonElement = topnavState.menuButtonElement
        if (menuButtonElement == null) return
        if (menuIconRef.current == null) return
        if (closeIconRef.current == null) return

        if (sidenavState.isOpen) {
            menuIconRef.current.classList.add('hidden')
            closeIconRef.current.classList.remove('hidden')
            return
        }

        menuIconRef.current.classList.remove('hidden')
        closeIconRef.current.classList.add('hidden')
    }, [sidenavState.isOpen, topnavState.menuButtonElement])

    //
    //
    //

    // tabIndex for onFocus(); TODO;
    return (<>
        {/* TODO; does not work; you tab behind the elements afterwards for some reason; */}
        {/* <div
            ref={focusAnchorRef}
            tabIndex={layoutState.activeTabIndexGroup === tabIndexGroupTopnav ? 0 : -1}
        >test</div> */}

        <nav
            // lg:h-[calc(var(--height-topnav)/2)]
            className="bg-background h-[--height-topnav] shadow-md"
            ref={initializeTopnavReference}
            tabIndex={layoutState.indexGroup === defaultIndexGroup ? 0 : -1}
        >
            <div
                className="h-[--height-topnav] lg:h-auto grid [grid-template-columns:20%_60%_20%] lg:[grid-template-columns:20%_1fr_410px] justify-items-center justify-between"
            >
                <div className="grid grid-flow-col justify-self-start">
                    {/* sidenav menu and home link; left; */}
                    <button
                        className="h-[--height-topnav]"
                        // onFocusCapture={setActiveTabIndexGroupToTopnav}
                        onPointerUp={toggleSidenav}
                        ref={initializeMenuButtonReference}
                        tabIndex={layoutState.indexGroup === topnavIndexGroup ? topnavIndexGroup : -1}
                    >
                        <i
                            className="p-1 icon-medium material-icons"
                            ref={menuIconRef}
                        >menu</i>
                        <i
                            className="p-1 icon-medium material-icons hidden"
                            ref={closeIconRef}
                        >close</i>
                    </button>
                    <Link
                        className="block h-[--height-topnav]"
                        href="/home"
                        ref={homeLinkRef}
                        tabIndex={layoutState.indexGroup === topnavIndexGroup ? topnavIndexGroup : -1}
                    >
                        <i className="p-1 icon-medium material-icons">home</i>
                    </Link>
                </div>
                {/* search input; middle; */}
                <Search />
                {/* key input hints; right; */}
                <div className="hidden lg:flex w-full px-5 justify-between items-center text-right">
                    <div className="grid grid-flow-col justify-center">
                        <i className="material-icons rotate-90">arrow_downward</i>
                        <i className="material-icons rotate-90">arrow_upward</i>
                        <i className="material-icons">arrow_upward</i>
                        <i className="material-icons">arrow_downward</i>
                        <span className="inline-block p-1 text-xs">to navigate</span>
                    </div>
                    <div className="text-center">
                        <img className="inline bg-white rounded-md p-1" src="./icons/enter-arrow-svgrepo-com.svg" alt="enter" height="24px" width="24px"></img>
                        <span className="inline-block p-1 text-xs">to select</span>
                    </div>
                    <div>
                        <img className="inline bg-white rounded-md p-1" src="./icons/esc-a-svgrepo-com.svg" alt="escape" height="24px" width="24px"></img>
                        <span className="inline-block p-1 text-xs">to go back</span>
                    </div>
                </div>
            </div>
        </nav >
    </>)
}