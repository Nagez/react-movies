import { useParams } from "react-router-dom"
import MovieTheaterForm from "./MovieTheaterForm";

export default function EditMovieTheater() {
    const { id }: any = useParams();
    return (
        <>
            <h3>Edit Movie Theater</h3>
            <MovieTheaterForm model={{ name: 'Me', latitude: 18.482214, longitude: -69.914311 }} onSubmit={values => console.log(values)} />
        </>
    )
}