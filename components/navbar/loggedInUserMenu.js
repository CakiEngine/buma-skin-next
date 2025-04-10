import { useSelector } from "react-redux";
import BDropdown from "../bulma/b-dropdown";

export default function LoggedInUserMenu() {
    const props = useSelector((s) => s.skindata.data)
    function menus() {
        const name = props.user.name;
        return [
            [
                {
                    href: '/member/mypage',
                    icon: "fas fa-usercircle",
                    text: '내 정보'
                }, {
                    href: "/w/user:"+name,
                    icon: "fas fa-stickynote",
                    text: '내 사용자 문서'
                }
            ], [
                {
                    href: "/contribution/"+name,
                    icon: "fas fa-filealt",
                    text: '내 문서 기여 목록'
                }, {
                    href: "/contribution/"+name+"/discuss",
                    icon: "fas fa-filecontract",
                    text: '내 토론 기여 목록'
                }, {
                    href: "/contribution/"+name+"/edit_request",
                    icon: "fas fa-filesignature",
                    text: '내 편집 요청 기여 목록'
                }, {
                    href: '/starred',
                    icon: "fas fa-bookmark",
                    text: '별찜한 문서'
                }
            ], [
                {
                    href: '/logout/'+encodeURIComponent(window.location.pathname),
                    icon: "fas fa-signuutalt",
                    text: '로그아웃'
                }
            ]];
    }
    return (
        <BDropdown right-dropdown icon="fas fa-user" label={props.user.name}>
            <SettingModalLink class="navbar-item">
                <span className="icon"> <i className="fas fa-wrench" /> </span>&nbsp; 스킨 설정
            </SettingModalLink>
            {menus().map(([submenus, i]) => {
                return (
                    <>
                        {submenus.map((submenu) => {
                            return (
                                <Link href={submenu.href} className="navbar-item">
                                    <span className="icon">
                                        <i className={submenu.icon} />
                                    </span>
                                    &nbsp;{ submenu.text }
                                </Link>
                            )
                        })}
                        {menus.length - 1 !== i && (
                            <div className="navbar-divider"></div>
                        )}
                    </>
                )
            })}
        </BDropdown>
    )
}