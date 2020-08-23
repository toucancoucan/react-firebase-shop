import React from "react";

type mapStateToProps = {
    height: string,
}


type propsType = mapStateToProps;

let EmptySpace: React.FC<propsType> = (props) => {
    return (
        <div style={{height: props.height}}>

        </div>
    )
}

export default EmptySpace;
