import Link from "next/link";
import { useSelector } from "react-redux";
import {fixedToolMenus} from "./fixedToolMenus"
import Logo from "./logo";
import BDropdown from "../bulma/b-dropdown";
import SearchForm from "../searchForm";
export default NavBar () {
    const props = useSelector((s) => s.skindata.data);
    const [isNavbarActive, setisNavbarActive] = useState(false);
    const toggleNavbarBurger = () => setisNavbarActive(!isNavbarActive);
    const toolMenus = fixedToolMenus;
    const isLoggedIn = props.user.isRegistered;
    return (
        <nav className="nav navbar" role="navigation" aria-label="main navigation">
        <Logo is-navbar-active={isNavbarActive} toggle-navbar-burger={toggleNavbarBurger}/>
        <div className={"navbar-menu"+(isNavbarActive == true && (" is-active"))} id="mainNavbar" data-testid="main-navbar">
            <div className="navbar-start">
                <Link href="/recentchanges" className="navbar-item">
                    <span className="icon"> <i className="fas fa-binoculars" /> </span>&nbsp;
                    최근 변경
                </Link>
                <Link href="/recenttalk" className="navbar-item">
                    <span className="icon"> <i className="fas fa-comments" /> </span>&nbsp;
                    최근 토론
                </Link>
                <BDropdown icon="fas fa-cogs" label="도구">
                {/*리버티의 nav 커스텀 같은 거인듯*/}
                {toolMenus.map((e) => {
                    return (
                        <Link className="navbar-item" href={e.href} key={e.href}>
                            <span className="icon"><i className={e.icon} /></span>
                            { e.text }
                        </Link>
                    )
                })}
                </BDropdown>
            </div>
            <div className="navbar-end">
                <div className="navbar-item is-hidden-touch">
                    <SearchForm />
                </div>
                {isLoggedIn == true ? (
                    <LoggedInUserMenu />
                ) : (
                    <AnonymousUserMenu />
                )}
            </div>
        </div>
    </nav>
    )
}