import React, {useEffect} from "react";

let useClickOutsideElement = (node: React.MutableRefObject<any>, funcOnClose: Function) => {
    useEffect(() => {
        const handleClick = (e: any) => {
            if (node.current?.contains(e.target))
                return;
            funcOnClose();
        };
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [node, funcOnClose]);
}


export default useClickOutsideElement;
