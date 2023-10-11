import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import Button from "../utility/Button";
import * as Yup from 'yup';
import DateField from "../forms/DateField";
import ImageField from "../forms/ImageField";
import { actorCreationDTO } from "./actors.model";
import MarkdownField from "../forms/MarkdownField";

export default function ActorForm(props: actorFormProps) {
    return (
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({ 
                name: Yup.string().required('This field is required').firstLetterUppercase(),
                dateOfBirth: Yup.date().nullable().required('This field is required')
            })}
        >
    {(formikProps) => (
        <Form>
            <TextField displayName="Name" field="name" />
            <DateField displayName="Date of birth" field="dateOfBirth" />
            <ImageField displayName="Picture" field="picture" imageURL={props.model.pictureURL} />
            <MarkdownField displayName="Biography" field="biography"/>

            <Button disabled={formikProps.isSubmitting} type="submit" >Save Changes</Button>
            <Link to="/actors" className="btn btn-secondary">Cancel</Link>
        </Form>
    )}
        </Formik >
    );
}

interface actorFormProps {
    model: actorCreationDTO;
    onSubmit(values: actorCreationDTO, action: FormikHelpers<actorCreationDTO>): void;
}