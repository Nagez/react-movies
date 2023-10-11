import IndividualMovie from "./IndividualMovie";
import { movieDTO } from "./movies.model";
import css from './MoviesList.module.css';
import GenericList from '../utility/GenericList';

export default function MoviesList(props: moviesListProps) {

    return <GenericList
        //loadingUI={<>loading...</>} //can use a custom loading ui
        list={props.movies}>
        <div className={css.div}>
            {props.movies?.map(movie => <IndividualMovie {...movie} key={movie.id} />)}
        </div>
    </GenericList>
}

interface moviesListProps {
    movies?: movieDTO[];
}