import {useEffect} from "react";

let useTitleChange = (title: string | undefined) => {
    useEffect(() => {
        if (title) document.title = title;
    });
}


export default useTitleChange;
