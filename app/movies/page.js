'use client'
import Link from "next/link";
import { useGlobalContext } from "../context"
import React from "react";

export default function Movies() {
    const { movies, isLoading } = useGlobalContext();

    if (isLoading) {
        return (
            <div className="loading-section">
                <div className="loading-div">Loading...</div>
            </div>
        )
    }

    return <>
        <section className="movies-section">
            <div className="movies-card">
                {movies.length == 0 ? '' :
                    movies.map((currMovie) => {
                        const { Title, Poster, imdbID, Year, Type } = currMovie;
                        const movieTitle = Title.substring(0, 16);
                        return (
                            <Link key={imdbID} href={`/movies/${imdbID}`}>
                                <div className="card">
                                    <div className="car-info">
                                        <h2 className="movie-title">{movieTitle.length >= 15 ? `${movieTitle}...` : movieTitle}</h2>
                                        <img src={Poster} alt={Title} className="movie-poster" />
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