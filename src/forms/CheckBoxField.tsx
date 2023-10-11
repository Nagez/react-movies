import { Field } from "formik";

export default function CheckBoxField(props: CheckBoxFieldProps) {
    return (
        <div className="mb-3 form-check">
            <Field className="form-check-input" id={props.field} name={props.field} type="checkbox" />
            <label htmlFor={props.field}>{props.displayName}</label>
        </div>
    )
}
interface CheckBoxFieldProps {
    displayName: string;
    field: string;
}