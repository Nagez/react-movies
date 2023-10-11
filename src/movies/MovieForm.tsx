import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import TextField from "../forms/TextField";
import Button from "../utility/Button";
import { movieCreationDTO } from "./movies.model";
import DateField from "../forms/DateField";
import ImageField from "../forms/ImageField";
import CheckBoxField from "../forms/CheckBoxField";

export default function MovieForm(props: MovieFormProps) {
    return (
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                title: Yup.string().required('This field is required').firstLetterUppercase()
            })}
        >
            {(formikProps) => (

                <Form>
                    <TextField displayName="Title" field="title" />
                    <CheckBoxField displayName="In Theaters" field="inTheaters" />
                    <TextField displayName="Trailer" field="trailer" />
                    <DateField displayName="Release Date" field="releaseDate" />
                    <ImageField displayName="Poster" field="poster" imageURL={props.model.posterURL}/>
                    
                    <Button disabled={formikProps.isSubmitting} type='submit'>Save Changes</Button>
                    <Link className="btn btn-secondary" to="/genres">Cancel</Link>
                </Form>
            )}
        </Formik >
    )
}

interface MovieFormProps {
    model: movieCreationDTO;
    onSubmit(values: movieCreationDTO, action: FormikHelpers<movieCreationDTO>): void;

}