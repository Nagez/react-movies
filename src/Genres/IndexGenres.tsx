import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { genreDTO } from "./genres.model";
import {urlGenres} from "../endpoints";

export default function IndexGenres(){

    useEffect(()=>{
        axios.get(urlGenres)
            .then((reponse:AxiosResponse<genreDTO[]>)=> {console.log(reponse.data);console.log(urlGenres);
        })
    },[])

    return(
        <>
            <h3>Genres index</h3>
            <Link className="btn btn-primary" to="/genres/create">Create genre</Link>

        </>
    )
}