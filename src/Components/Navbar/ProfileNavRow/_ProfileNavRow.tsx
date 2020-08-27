import React from "react";
import {Link} from "react-router-dom";
import {getDateString} from "../../../Functions/getDateString";

export type mapStateToPropsType = {
    userName: string | null
}
type propsType = mapStateToPropsType;

let _ProfileNavRow: React.FC<propsType> = (props) => {
    let content = props.userName == null ? <><Link to={"/login"}>LOGIN </Link> or <Link
            to={"/register"}> REGISTER </Link></>
        : <Link to={"/profile"}>{props.userName} </Link>
    return (
        <div style={{fontFamily: "inherit"}}>
            {content}
            |
            {getDateString()}
        </div>
    )
};


export default _ProfileNavRow;