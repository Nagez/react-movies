import { useParams } from "react-router-dom";
import { genreDTO } from "../Genres/genres.model";
import MovieForm from "./MovieForm";
import { movieTheaterDTO } from "../MovieTheaters/movieTheater.model";
import { actorMovieDTO } from "../Actors/actors.model";

export default function EditMovie(){
    //const {id}: any = useParams();
    const nonSelectedGenres: genreDTO[]=[{id:2,name:'drama'}];
    const selectedGenres: genreDTO[]=[{id:1,name:'comedy'}];

    const nonSelectedMovieTheaters: movieTheaterDTO[] = [{ id: 2, name: 'agora' }]
    const selectedMovieTheaters: movieTheaterDTO[] = [{ id: 1, name: 'sambil' }]

    const selectedActors: actorMovieDTO[] = [{ id: 3, name: 'miles', character: 'Gerald', picture: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/First_image_of_miles_morales_spider_man.jpg/220px-First_image_of_miles_morales_spider_man.jpg' }]


    return(
        <>
            <h3>Edit Movie</h3>
            <MovieForm model={{ title: 'Pumba', inTheaters: true, trailer: 'url', releaseDate: new Date('2019-01-01T00:00:00') }}
                onSubmit={values => console.log(values)}
                selectedGenres={selectedGenres} 
                nonSelectedGenres={nonSelectedGenres}
                selectedMovieTheaters={selectedMovieTheaters}
                nonSelectedMovieTheaters={nonSelectedMovieTheaters}
                selectedActors={selectedActors}
                />
        </>
    )
}