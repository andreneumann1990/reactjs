import DesktopDropdown1Component from './Dropdown1'

function DesktopTopbarComponent() {
    return (<nav className="desktop-navbar">
        {/* <p>very important text</p> */}
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <DesktopDropdown1Component />
    </nav>)
}

export default DesktopTopbarComponent