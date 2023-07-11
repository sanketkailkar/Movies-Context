'use client'
import Link from "next/link";
import { useGlobalContext } from "../context"
import React from "react";

export default function Movies() {
    const { movies, isLoading } = useGlobalContext();
 
    if(isLoading){
        return (
            <div className="text-center mt-20">
                <div className=" text-2xl">Loading...</div>
            </div>
        )
    }
    return <>
        <section className="movie-page">
            <div className="grid grid-cols-3">
                {movies.length == 0 ? '' : 
                    movies.map((currMovie) => {
                        const { Title, Poster, imdbID, Year, Type} = currMovie;
                        const movieTitle = Title.substring(0, 16);
                        return(
                            <Link key={imdbID} href={`/movies/${imdbID}`}>
                                <div className="card">
                                    <div className="car-info">
                                        <h2>{movieTitle.length >= 15 ? `${movieTitle}...` : movieTitle}</h2>
                                        <img src={Poster} alt={Title} width={180} height={200}/>
                                    </div>
                                </div>
                            </Link>
                    )
                    })
                }
            </div>
        </section>
    </>
}