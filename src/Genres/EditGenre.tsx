import { useParams } from "react-router-dom"
import GenreForm from "./GenreForm";

export default function EditActor(){
    const {id}: any = useParams();
    return(
        <>
            <h3>Edit Actor</h3>
            <GenreForm model={{ name: 'Action' }} onSubmit={async value => {
                await new Promise(r => setTimeout(r, 1));
                console.log(id);
                console.log(value);
            }} />
        </>
    )
}