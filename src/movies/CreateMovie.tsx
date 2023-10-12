import { genreDTO } from "../Genres/genres.model";
import { movieTheaterDTO } from "../MovieTheaters/movieTheater.model";
import MovieForm from "./MovieForm";

export default function CreateMovie() {

    const nonSelectedGenres: genreDTO[] = [{ id: 1, name: 'comedy' }, { id: 2, name: 'drama' }];
    const nonSelectedMovieTheaters: movieTheaterDTO[] = [{ id: 1, name: 'sambil' }, { id: 2, name: 'agora' }]

    return (
        <>
            <h3>Create Movie</h3>
            <MovieForm model={{ title: '', inTheaters: false, trailer: '' }}
                onSubmit={values => console.log(values)}
                selectedGenres={[]}
                nonSelectedGenres={nonSelectedGenres}
                selectedMovieTheaters={[]}
                nonSelectedMovieTheaters={nonSelectedMovieTheaters}

            />
        </>
    )
}