import { useRouter } from "next/router";
import { useState } from "react"

export default function SearchForm () {
    const router = useRouter();
    function gotodoc(searchText) {
        if (!searchText) return;
        router.push('/w/' + encodeURIComponent(searchText));
    }
    function random() {
        router.push('/randompage');
    }
    const [searchText, setsearchText] = useState("")
    return (
        <form onSubmit={(e) => {e.preventDefault()}}>
            <style jsx>{`
                .fullWidth {
                    width: 100%;
                }
            `}</style>
        <div className={"fullWidth dropdown" + (show && (" is-active"))}>
            <div className="fullWidth dropdown-trigger">
                <div className="field has-addons">
                    <div className="control has-icons-left is-expanded">
                        <input
                            className="input is-primary"
                            onChange={(e) => {setsearchText(e.target.value)}}
                            type="text"
                            autocomplete="off"
                            placeholder="검색"
                        />
                        <span className="icon is-small is-left has-text-primary">
                            <i className="fas fa-search" />
                        </span>
                    </div>
                    <div className="control">
                        <a href="#" className="button is-primary is-outlined" onClick={(e) => {
                            e.preventDefault();
                            gotodoc(searchText);
                        }}>
                            <span className="icon">
                            <i className="fas fa-search" />
                            </span>
                        </a>
                    </div>
                    <div className="control">
                        <a href="#" className="button is-primary is-outlined" onClick={(e) => {
                            e.preventDefault();
                            random();
                        }}>
                            <span className="icon">
                            <i className="fas fa-random" />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="dropdown-menu">
                <div className="dropdown-content">
                    {/* <a
                        className="dropdown-item 'is-active': })"
                        v-for="(item, i) in internalItems"
                        @click.prevent="onClickItem(item)"
                        :key="i"
                        @mouseover="cursor = i"
                        href="#"
                    >
                        {{ item }}
                    </a>*/}
                    잠시 넣었수다
                </div>
            </div>
        </div>
    </form>
    )
}