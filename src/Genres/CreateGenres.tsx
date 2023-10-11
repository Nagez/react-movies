import { Link, useHistory } from "react-router-dom";
import Button from "../utility/Button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import GenreForm from "./GenreForm";

export default function CreateGenre() {

    // const history = useHistory();

    return (
        <>
            <h3>Create Genres</h3>
            <GenreForm model={{ name: '' }} onSubmit={async value => {
                await new Promise(r => setTimeout(r, 1000));
                console.log(value);
            }} />


            {/* <Button onClick={()=>{
                history.push('/genres')
            }}>Save changes</Button> */}
        </>
    )
}