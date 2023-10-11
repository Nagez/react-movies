import { Link } from "react-router-dom";

export default function IndexMovieTheater(){
    return(
        <>
            <h3>Movie Theater index</h3>
            <Link className="btn btn-primary" to="/movietheaters/create">Create Movie Theater</Link>

        </>
    )
}