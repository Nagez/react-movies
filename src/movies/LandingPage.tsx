import MoviesList from "./MoviesList"
import { landingPageDTO } from "./movies.model";
import { useEffect, useState } from "react";
import css from './LandingPage.module.css';

export default function LandingPage() {

    const [movies, setMovies] = useState<landingPageDTO>({});

    useEffect(() => {
        const timerId = setTimeout(() => {
            setMovies({
                inTheaters: [
                    {
                        id: 1,
                        title: "spiderman",
                        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Spider-Man_PS4_cover.jpg/220px-Spider-Man_PS4_cover.jpg"
                    },

                    {
                        id: 2,
                        title: "spiderman 2",
                        poster: "https://m.media-amazon.com/images/I/818FaEbp7PL._AC_SL1500_.jpg"
                    }
                ],
                upcomingReleases: [
                    {
                        id: 3,
                        title: "spiderman 3",
                        poster: "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png"
                    }
                ]
            })
        }, 1000); //delay 1 sec
        return () => clearTimeout(timerId); //cleanup resources
    })


    return (
        <>
            <h3>In Theaters</h3>
            <MoviesList movies={movies.inTheaters} />

            <h3>Upcoming Movies</h3>
            <MoviesList movies={movies.upcomingReleases} />
        </>
    )

}

