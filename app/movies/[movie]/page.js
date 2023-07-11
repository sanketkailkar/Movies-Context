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
      <div className="text-center mt-20">
        <div className=" text-2xl">Loading...</div>
      </div>
    )
  }

  return (<>
    <section>
      <div>
        <figure>
          <img src={movies.Poster} alt={movies.Title} />
        </figure>
      </div>
      <div className="">
        <p className="">{movies.Title}</p>
        <p className=""></p>
        <p className="">{movies.Released}</p>
        <p className="">{movies.Genre}</p>
        <p className="">{movies.Writer}</p>
        <p className="">{movies.imdbRating} / 10</p>
        <p className="">{movies.Language}</p>
        <button onClick={()=> router.push("/")}>Go Back</button>
      </div>
  </section></>
  );
}
 