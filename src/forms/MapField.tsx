import { useFormikContext } from "formik";
import coordinateDTO from "../utility/coordinates.model";
import Map from "../utility/Map";

export default function MapField(props: MapFieldProps) {

    const { values } = useFormikContext<any>();

    function handleMapClick(coordinates: coordinateDTO) {
        values[props.latField] = coordinates.lat;
        values[props.lngField] = coordinates.lng;
    }
    return (

        <Map
            coordinates={props.coordinates}
            handleMapClick={handleMapClick}
        />
    )
}

interface MapFieldProps {
    coordinates: coordinateDTO[];
    latField: string;
    lngField: string;
}

MapField.defaultPros = {
    coordinates: []
}


