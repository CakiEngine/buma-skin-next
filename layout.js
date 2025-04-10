import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Navbar from "./components/navbar/navbar";

export default Skin (props) {
    const router = useRouter();
    useEffect(() => {
        document.documentElement.dataset.theme = props.user.setting.theme;
    }, [])
    function doBehaviorWhenDblClick() {
        if (props.actiontype != "document") {return};
        const action = props.user.setting.BumaDblClickAction;
        switch (action) {
            case 'edit':
            case 'historys':
                const link = `/${action}/${props.namespace}/${props.title}`;
                router.push(link);
                break;
            case 'doNothing':
            case 'skinDefault':
            default:
                break;
        }
    }
    return (
        <div class="buma">
        <div class="top-anchor"></div>
        <Navbar />
        <MobileSearchNavbar />
        <WikiHero />
        <section className="section">
            <div class="container">
                {props.sitenotice != undefined && (
                    <b-notification v-if="$store.state.config['wiki.sitenotice']" color="is-warning">
                        <span v-html="$store.state.config['wiki.sitenotice']" />
                    </b-notification>
                )}
                {props.user.has_sato != true && (
                <b-notification className="is-link">
                    <Link href={`/talks/user/${props.user.name}`}>사용자 토론</Link>이 있습니다.
                    확인해주세요.
                </b-notification>
                )}
                <div class="wiki-article" onDoubleClick={(e) => {
                    e.preventDefault();
                    doBehaviorWhenDblClick();}}>
                    {props.bodycontent}
                    {props.action == "license" && (
                        <skin-license></skin-license>
                    )}
                    
                </div>
            </div>
        </section>
        <BumaFooter />
        <jump-buttons />
    </div>       
    )
}