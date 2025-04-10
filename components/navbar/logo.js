import Link from "next/link"
import { useSelector } from "react-redux"

export default function Logo(props) {
    const store = useSelector((s) => s.skindata.data)
    return (
        <div className="navbar-brand">
            <Link href="/" className="navbar-item">
                {store.config.enable_logo && (
                    <img src="/logo.png" />
                )}
                {process.env.NEXT_PUBLIC_WIKI_NAME}</Link>
            <a className={"navbar-burger"+(isNavbarActive && (" is-active"))} onClick={(e) => {
                e.preventDefault();
                props.toggleNavbarBurger
            }} data-testid="navbar-activation-button-on-mobile">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </a>
        </div>
    )
}