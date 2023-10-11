import { ReactElement } from "react";
import Loading from "./Loading";

export default function GenericList(props: genericListProps) {
    if (!props.list) { //if no list show a loading
        if (props.loadingUI) { //if a loadingUI element was passed we show it else we show the default loading component
            return props.loadingUI;
        }
        return <Loading />
    } else if (props.list.length === 0) { //if list is loaded and has 0 elements
        if (props.emptyListUI) {
            return props.emptyListUI;
        }
        return <>There are no elements to display.</>
    } else {
        return props.children;
    }
}

interface genericListProps {
    list: any;
    loadingUI?: ReactElement;
    emptyListUI?: ReactElement;
    children: ReactElement;
}