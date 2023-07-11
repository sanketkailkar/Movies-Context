// Context API ( warehouse )
// provider ( delivery )
// customer ( you )
'use client'
import { createContext, useContext, useEffect, useState } from 'react';

const API_URL = `https://www.omdbapi.com/?&apikey=${process.env.NEXT_PUBLIC_API_KEY}`;
// Warehouse 
const AppContext = createContext();

// we need to create provider
function AppContextProvider({ children }) {

    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [isError, setError] = useState({ show: false, msg: "" });
    const [query, setQuery] = useState("Avatar");

    const getMovies = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.Response === "True") {
                setIsLoading(false);
                setError({show:false, msg:''})
                setMovies(data.Search || data);
            } else {
                setError({ show: true, msg: data.Error });
            }
        } catch (error) {
            console.log(error);
        }
    }
    //debouncing (using it in sometime)
    useEffect(() => {
        let timeOut = setTimeout(() => {
            getMovies(`${API_URL}&s=${query}`);
        }, 500);
        return () => {
            clearTimeout(timeOut);
        }
    }, [query]);

    return (
        <AppContext.Provider value={{ isLoading, isError, movies, query, setQuery }}>
            {children}
        </AppContext.Provider>
    )
}

// Use global custom hook
const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppContextProvider, useGlobalContext, API_URL };

