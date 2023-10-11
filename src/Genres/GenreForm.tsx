import { Form, Formik, FormikHelpers } from "formik";
import TextField from "../forms/TextField";
import Button from "../utility/Button";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import { genreCreationDTO } from "./genres.model";

export default function GenreForm(props: genreFormProps){
    return(
        <Formik initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required('this field is required').firstLetterUppercase()
            })
            }
        >
            {(formikProps) => (
                <Form>
                    <TextField field="name" displayName="Name" />

                    <Button disabled={formikProps.isSubmitting} type='submit'>Save changes</Button>
                    <Link className="btn btn-secondary" to="/genres" >Cancle</Link>
                </Form>
            )}


        </Formik>
    )
}

interface genreFormProps{
    model: genreCreationDTO;
    onSubmit(values: genreCreationDTO, action: FormikHelpers<genreCreationDTO>): void;
}