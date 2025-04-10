import { useEffect, useState } from "react";

export default function BDropdown (props) {
    const [setshowDropdown, showDropdown] = useState(false);
    function toggleNavbar() {
        setshowDropdown(showDropdown);
    }
    useEffect(() => {
        let screenResizeTimeout = null
        function handleResize() {
            if (screenResizeTimeout)
                clearTimeout(screenResizeTimeout);
            screenResizeTimeout = setTimeout(toggleBySize, 100);
        }
        function toggleBySize() {
            const windowWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            setshowDropdown(windowWidth < 1024 ? false : true);
        }
        window.addEventListener('resize', handleResize);
        toggleBySize();
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])
    return (
        <div className="navbar-item has-dropdown is-hoverable">
        <a href="#" className="navbar-link" onClick={(e) => {
            e.preventDefault();
            toggleNavbar();
        }}>
            {props.icon != undefined && (
                <span className="icon">
                <i className={props.icon} />
            </span>
            )}&nbsp;
            {props.label}
        </a>
        <div style={{display:(showDropdown ? ("block") : ("none"))}} className={"navbar-dropdown"+ rightDropdown && (" is-right")}>
            {props.children}
        </div>
    </div>
    )
}