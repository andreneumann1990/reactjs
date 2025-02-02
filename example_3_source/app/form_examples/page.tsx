'use client'

import { useFormik } from 'formik'
import { MouseEvent, useRef, useState, } from 'react'
import * as Yup from 'yup'
import { Country1, Country2 } from '../../components/atoms/Country'
import Link from 'next/link'
import { Button } from '@mui/material'
import { focusableElementSelectors, mainIndexGroup } from '../../constants/parameters'
import { useIndexGroupEffect, useIndexGroupContainer } from '../../hooks/useIndexGroup'
import { NullableDivElement, NullableFormElement } from '../../constants/types'

function Page() {
    //
    // parameters and variables
    //

    const form1Ref = useRef<NullableFormElement>(null)
    const [pageElement, setPageElement] = useState<NullableDivElement>(null)

    //
    // functions
    //

    const form1 = useFormik({
        initialValues: {
            button: '',
            checkbox: 'false',
            color: '#000000',
            date: '',
            datetimeLocal: '',
            email: '',
            file: '',
            hidden: 'super secret hidden field',
            image: '',
            month: '',
            number: '',
            password: '',
            radio: 'a',
            range: '50',
            reset: '',
            search: '',
            submit: '',
            tel: '',
            text: '',
            time: '',
            url: '',
            week: '',
        },
        validationSchema: Yup.object({
            text: Yup.string().matches(/^\D*$/g, 'No numbers!'),
            password: Yup.string()
                .min(6, 'Too short.')
                .max(6, 'Too long.')
                .matches(/^123456$/g, 'Too secure.')
                .required('Required.'),
            url: Yup.string().url('Invalid url.'),
        }),
        onSubmit: async (values: { [field: string]: string }) => {
            alert(JSON.stringify(values, null, 2))
        },
    })

    const form2 = useFormik({
        initialValues: {
            country1: '',
            country2: '',
        },
        onSubmit: async (values: { [field: string]: string }) => {
            alert(JSON.stringify(values, null, 2))
        },
    })

    //
    //
    //

    function normalizeHeights(formElement: HTMLDivElement | null): void {
        if (formElement == null) return
        const items = formElement.childNodes
        let tallest = 0

        items.forEach(item => {
            if (!(item instanceof HTMLElement)) return
            if (item.offsetHeight <= tallest) return
            tallest = item.offsetHeight
        })

        items.forEach(item => {
            if (!(item instanceof HTMLElement)) return
            item.style.minHeight = `${tallest}px`
        })
    }

    function handleClick(event: MouseEvent): void {
        const element = event.target as HTMLInputElement | null
        if (element == null) return
        if (element.name === '') return
        form1.setFieldValue(element.name, 'clicked')
    }

    function resetForm(event: MouseEvent): void {
        form1.resetForm()
        handleClick(event)
    }

    //
    // effects
    //

    useIndexGroupEffect(pageElement, focusableElementSelectors)

    //
    //
    //

    return (
        <div
            {...useIndexGroupContainer(mainIndexGroup)}
            ref={setPageElement}
        >
            {/* header; */}
            <h1 className="my-3 text-3xl font-bold">Form Examples</h1>

            <h2 className="my-1 text-xl font-bold">All Input Types:</h2>
            <form
                ref={(element) => { form1Ref.current = element }}
                onSubmit={form1.handleSubmit}
            >
                <div ref={normalizeHeights} className="grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border-x-[1px] items-center overflow-x-hidden">
                    <div className="grid px-5 border-x-[1px] items-center">
                        <label className="group-data-inactive/main:touch-none">
                            Button:
                            <br />
                            <input
                                className="bg-primary border m-1 px-2 py-1 rounded-md text-pretty"
                                name="button"
                                onClick={handleClick}
                                type="button"
                                value="use cases? use normal button instead?"
                            />
                        </label>
                    </div>
                    <div className="grid px-5 border-x-[1px] items-center">
                        <label className="group-data-inactive/main:touch-none">
                            Checkbox:
                            <input
                                {...form1.getFieldProps('checkbox')}
                                className="ml-2 m-1 px-2 py-1 rounded-md touch-none"
                                type="checkbox"
                            />
                        </label>
                    </div>
                    <div className="grid px-5 border-x-[1px] items-center">
                        <label className="group-data-inactive/main:touch-none">
                            Color:
                            <input
                                {...form1.getFieldProps('color')}
                                className="ml-2 m-1 px-2 py-1 rounded-md"
                                type="color"
                            />
                        </label>
                    </div>
                    <div className="grid px-5 border-x-[1px] items-center">
                        <label className="group-data-inactive/main:touch-none">
                            Date:
                            <br />
                            <input
                                {...form1.getFieldProps('date')}
                                className="m-1 px-2 py-1 rounded-md"
                                type="date"
                            />
                        </label>
                    </div>
                    <div className="grid px-5 border-x-[1px] items-center">
                        <label className="group-data-inactive/main:touch-none">
                            Datetime-Local:
                            <br />
                            <input
                                {...form1.getFieldProps('datetimeLocal')}
                                className="m-1 px-2 py-1 rounded-md"
                                type="datetime-local"
                            />
                        </label>
                    </div>
                    <div className="grid px-5 border-x-[1px] items-center">
                        <label className="group-data-inactive/main:touch-none">
                            Email:
                            <br />
                            <input
                                {...form1.getFieldProps('email')}
                                autoComplete="email"
                                className="w-64 sm:w-72 m-1 px-2 py-1 rounded-md"
                                placeholder="max.mustermann@mustermail.de"
                                type="email"
                            />
                        </label>
                    </div>
                    <div className="grid px-5 border-x-[1px] items-center">
                        <label className="group-data-inactive/main:touch-none">
                            File:
                            <br />
                            <input
                                {...form1.getFieldProps('file')}
                                accept=".txt,.cs,application/msword"
                                className="m-1 px-2 py-1 rounded-md"
                                type="file"
                            />
                        </label>
                    </div>
                    <div className="grid px-5 border-x-[1px] items-center">
                        <p>Hidden:
                            <input
                                {...form1.getFieldProps('hidden')}
                                className="ml-2 m-1 px-2 py-1 rounded-md"
                                type="hidden"

                                data-no-tab-index-override
                                tabIndex={-1}
                            />
                        </p>
                    </div>
                    <div className="flex px-5 border-x-[1px] items-center">
                        <label className="flex items-center">
                            Image:
                            <input
                                className="ml-2 m-1 px-2 py-1 rounded-md"
                                name="image"
                                onClick={handleClick}
                                src="./icons/logo192.png"
                                type="image"
                                width={40}
                            />
                        </label>
                        {!form1.touched.image || Object.keys(form1.errors).length < 1 ?
                            null : <span className="ml-4 px-2 py-1 text-red-500">The form contains invalid fields.</span>
                        }
                    </div>
                    <div className="grid px-5 border-x-[1px] items-center">
                        <label className="group-data-inactive/main:touch-none">
                            Month:
                            <br />
                            <input
                                {...form1.getFieldProps('month')}
                                className="m-1 px-2 py-1 rounded-md"
                                type="month"
                            />
                        </label>
                    </div>
                    <div className="grid px-5 border-x-[1px] items-center">
                        <label className="group-data-inactive/main:touch-none">
                            Number:
                            <br />
                            <input
                                {...form1.getFieldProps('number')}
                                className="m-1 px-2 py-1 rounded-md"
                                type="number"
                            />
                        </label>
                    </div>
                    <div className="grid px-5 border-x-[1px] items-center">
                        <label className="group-data-inactive/main:touch-none">
                            <span className="before:content-['*'] after:content-['*'] after:ml-1 after:text-red-500">Password:</span>
                            {!form1.touched.password ? null : form1.errors.password ?
                                <span className="ml-4 px-2 py-1 text-red-500">{form1.errors.password}</span>
                                : <span className="ml-4 px-2 py-1 text-green-500">That&apos;s the right password!</span>
                            }
                            <br />
                            <input
                                {...form1.getFieldProps('password')}
                                autoComplete="current-password"
                                className="m-1 px-2 py-1 rounded-md"
                                id="password"
                                placeholder="123456"
                                type="password"
                            />
                        </label>
                    </div>
                    <div className="grid px-5 border-x-[1px] items-center">
                        <label className="group-data-inactive/main:touch-none">
                            Radio:
                            <br />
                            <label className="inline-flex px-2">
                                <input
                                    checked={form1.values.radio === 'a'}
                                    name="radio"
                                    onChange={form1.handleChange}
                                    type="radio"
                                    value="a"
                                />&nbsp;a</label>
                            <label className="inline-flex px-2">
                                <input
                                    checked={form1.values.radio === 'b'}
                                    name="radio"
                                    onChange={form1.handleChange}
                                    type="radio"
                                    value="b"
                                />&nbsp;b</label>
                            <label className="inline-flex px-2">
                                <input
                                    checked={form1.values.radio === 'c'}
                                    name="radio"
                                    onChange={form1.handleChange}
                                    type="radio"
                                    value="c"
                                />&nbsp;c</label>
                        </label>
                    </div>
                    <div className="grid px-5 border-x-[1px] items-center">
                        <label className="group-data-inactive/main:touch-none">
                            Range:
                            <br />
                            <input
                                {...form1.getFieldProps('range')}
                                className="m-1 px-2 py-1 rounded-md"
                                type="range"
                            />
                        </label>
                    </div>
                    <div className="grid justify-between px-5 border-x-[1px] items-center">
                        <label className="group-data-inactive/main:touch-none">
                            Reset:
                            <br />
                            <input
                                className="bg-primary border m-1 px-2 py-1 rounded-md text-pretty"
                                name="reset"
                                onClick={resetForm}
                                type="reset"
                                value="use cases? use normal button instead?"
                            />
                        </label>
                    </div>
                    <div className="grid px-5 border-x-[1px] items-center">
                        <label className="group-data-inactive/main:touch-none">
                            Search:
                            <br />
                            <input
                                {...form1.getFieldProps('search')}
                                className="m-1 px-2 py-1 rounded-md"
                                type="search"
                            />
                        </label>
                    </div>
                    <div className="grid px-5 border-x-[1px] items-center">
                        <label className="group-data-inactive/main:touch-none">
                            Submit:
                            {!form1.touched.submit || Object.keys(form1.errors).length < 1 ?
                                <span className="h-7" /> :
                                <span className="ml-4 px-2 py-1 text-red-500">The form contains invalid fields.</span>
                            }
                            <br />
                            <input
                                className="bg-primary border m-1 px-2 py-1 rounded-md text-pretty"
                                name="submit"
                                onClick={handleClick}
                                type="submit"
                                value="use cases? use normal button instead?"
                            />
                        </label>
                    </div>
                    <div className="grid px-5 border-x-[1px] items-center">
                        <label className="group-data-inactive/main:touch-none">
                            Tel:
                            <br />
                            <input
                                {...form1.getFieldProps('tel')}
                                autoComplete="tel"
                                className="m-1 px-2 py-1 rounded-md"
                                type="tel"
                            />
                        </label>
                    </div>
                    <div className="grid px-5 border-x-[1px] items-center">
                        <label className="group-data-inactive/main:touch-none">
                            Text:
                            {!form1.touched.text || !form1.errors.text ? null : <span className="ml-4 px-2 py-1 text-red-500">{form1.errors.text}</span>}
                            <br />
                            <input
                                {...form1.getFieldProps('text')}
                                autoComplete="username"
                                className="m-1 px-2 py-1 rounded-md"
                                placeholder="text only"
                                type="text"
                            />
                        </label>
                    </div>
                    <div className="grid px-5 border-x-[1px] items-center">
                        <label className="group-data-inactive/main:touch-none">
                            Time:
                            <input
                                {...form1.getFieldProps('time')}
                                className="ml-2 m-1 px-2 py-1 rounded-md"
                                type="time"
                            />
                        </label>
                    </div>
                    <div className="grid px-5 border-x-[1px] items-center">
                        <label className="group-data-inactive/main:touch-none">
                            URL:
                            {!form1.touched.url || !form1.errors.url ? null : <span className="ml-4 px-2 py-1 text-red-500">{form1.errors.url}</span>}
                            <br />
                            <input
                                {...form1.getFieldProps('url')}
                                className="m-1 px-2 py-1 rounded-md"
                                placeholder="https://www.google.de"
                                type="url"
                            />
                        </label>
                    </div>
                    <div className="grid px-5 border-x-[1px] items-center">
                        <label className="group-data-inactive/main:touch-none">
                            Week:
                            <br />
                            <input
                                {...form1.getFieldProps('week')}
                                className="m-1 px-2 py-1 rounded-md"
                                type="week"
                            />
                        </label>
                    </div>
                    <div className="hidden xl:block px-5 xl:border-x-[1px] items-center" />
                    <div className="hidden xl:block px-5 xl:border-x-[1px] items-center" />
                </div>
            </form >

            <br />

            {/* country select input element; */}
            <h2 className="my-1 text-xl font-bold">MUI has predefined UI elements:</h2>
            <form className="m-4" onSubmit={form2.handleSubmit}>
                <div ref={normalizeHeights} className="grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center">
                    <div className="grid px-5 items-center">
                        <div>
                            First try:
                            {/*
                                rounded-md does not work since it is applied to the container; the container has 
                                no border; customization might be difficult when using these pre-defined 
                                elements; 
                            */}
                            <Country1 setFieldValue={(value) => form2.setFieldValue('country1', value)} />
                        </div>
                    </div>
                    <div className="grid px-5 items-center">
                        <div>
                            Copied from:&nbsp;
                            <Link
                                className="text-blue-300"
                                href="https://mui.com/material-ui/react-autocomplete/"
                            >https://mui.com/material-ui/react-autocomplete/</Link>
                            <Country2 setFieldValue={(value) => form2.setFieldValue('country2', value)}
                            />
                        </div>
                    </div>
                </div>
                <br />
                <Button
                    type="submit"
                    variant="outlined"
                >Submit</Button>
            </form >
        </div>
    )
}

export default Page