import MoviesList from "./MoviesList"
import { landingPageDTO } from "./movies.model";
import { useEffect, useState } from "react";

export default function LandingPage() {

    const [movies, setMovies] = useState<landingPageDTO>({});

    useEffect(() => {
        const timerId = setTimeout(() => {
            setMovies({
                inTheaters: [
                    {
                        id: 1,
                        title: "spooderman",
                        poster: "https://m.media-amazon.com/images/I/818FaEbp7PL._AC_SL1500_.jpg"
                    },

                    { id: 2, title: "spooderman1", poster: "https://img.itch.zone/aW1hZ2UvODYyMi8yNDAwMC5wbmc=/347x500/dG3f2Y.png" }
                ],
                upcomingReleases: [
                    {
                        id: 3,
                        title: "spidermanman",
                        poster: "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png"
                    }
                ]
            })
        }, 1000); //delay 1 sec
        return () => clearTimeout(timerId); //cleanup resources
    })


    return (
        <>
            <h3>In theaters</h3>
            <MoviesList movies={movies.inTheaters} />

            <h3>upcoming movies</h3>
            <MoviesList movies={movies.upcomingReleases} />
        </>
    )

}

