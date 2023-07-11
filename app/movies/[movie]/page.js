'use client'
import { API_URL } from "../../context";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Movie({ params }) {
  const router = useRouter();

  const id = params.movie;
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState("");

  const getMovies = async (url) => {
    setIsLoading(true)
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === "True") {
        setIsLoading(false);
        setMovies(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  //debouncing (using it in sometime)
  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`);
    }, 800);
    return () => { clearTimeout(timeOut); }
  }, [id]);

  if (isLoading) {
    return (
      <div className="loading-section">
        <div className="loading-div">Loading...</div>
      </div>
    )
  }

  return (<>
    <div className="movie-page">
      <section className="movie-section">
        <div className="col">
          <figure className="movie-figure">
            <img src={movies.Poster} alt={movies.Title} className="movie-img" />
          </figure>
        </div>
        <div className="col">
          <p>Title:- {movies.Title}</p>
          <p>Released:- {movies.Released}</p>
          <p>Genre:- {movies.Genre}</p>
          <p>Writer:- {movies.Writer}</p>
          <p>imdb Rating:- {movies.imdbRating} / 10</p>
          <p>Language:- {movies.Language}</p>
          <button className="goback-btn" onClick={() => router.push("/")}>Go Back</button>
        </div>
      </section>
    </div>
  </>
  );
}
