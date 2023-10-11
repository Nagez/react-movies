import { useParams } from "react-router-dom"
import MovieForm from "./MovieForm";

export default function EditMovie(){
    const {id}: any = useParams();
    return(
        <>
            <h3>Edit Movie</h3>
            <MovieForm model={{ title: 'Pumba', inTheaters: true, trailer: 'url', releaseDate: new Date('2019-01-01T00:00:00') }}
                onSubmit={values => console.log(values)} />
        </>
    )
}