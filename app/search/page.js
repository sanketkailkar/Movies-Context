'use client'
import { useGlobalContext } from "../context"

export default function Search() {

    const { query, setQuery, isError } = useGlobalContext();

    return (
        <section className="">
            <h2>Search Your Favourite Movie</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <input type="text" placeholder="search here..." className="border-4 border-solid border-slate-950  "
                        value={query} onChange={(e) => setQuery(e.target.value)} />
                </div>
            </form>
            <div className="card-error">
                <p>{isError.show && isError.msg}</p>
            </div>
        </section> 
    )
}