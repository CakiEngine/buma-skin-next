import {useSelector} from 'react-redux'
export default function Footer() {
    const props = useSelector(s => s.skindata.data);
    let except = JSON.parse(JSON.stringify(props.Footer));
    delete except["copyright"];
    return (
        <footer className="footer">
            <div className="container">
                <div className="content has-text-centered">
                    <p>
                        <span dangerousInnerHTML={{"__html":props.Footer.copyright}} />
                        {Object.entries(except).map(([k, v]) => {
                            return (
                                <span key={k} dangerousInnerHTML={{"__html":v}}>
                            )
                        })}
    
                        <a href="https://github.com/Litehell/theseed-skin-buma">Buma</a> with <a href="https://github.com/enpotid/wiki_server">caki</a> <br />
                        buma skin is distributed under
                        <a href="https://www.gnu.org/licenses/gpl-3.0.html">GNU General Public License Version 3</a>
                    </p>
                </div>
        </div>
    </footer>
    )
}
