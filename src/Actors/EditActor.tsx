import { useParams } from "react-router-dom"
import ActorForm from "./ActorForm";

export default function EditActor() {
    const { id }: any = useParams();
    return (
        <>
            <h3>Edit Actor</h3>
            <ActorForm model={{
                name: 'Or Nagar',
                dateOfBirth: new Date('1996-06-01T00:00:00'),
                pictureURL: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Kelvin_Kiptum_%28KEN%29_2023.jpg',
                biography: `# tom from **london**`
            }}
                onSubmit={values => console.log(values)} />
        </>
    )
}