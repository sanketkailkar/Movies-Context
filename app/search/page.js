'use client'
import { useGlobalContext } from "../context"

export default function Search() {

    const { query, setQuery, isError } = useGlobalContext();

    return (
        <section className="search-section">
            <h1 className="title"><span className="title-letter">S</span>anket<span className="title-letter">M</span>ovies</h1>
            <h2 className="title-desp">Search Your Favourite Movie</h2>
            <form onSubmit={(e) => e.preventDefault()} className="form-input">
                <div>
                    <input type="text" placeholder="search here..." className="search-input"
                        value={query} onChange={(e) => setQuery(e.target.value)} />
                </div>
            </form>
            <div className="card-error">
                <p className="error">{isError.show && isError.msg}</p>
            </div>
        </section> 
    )
}