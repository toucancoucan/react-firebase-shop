import React from "react";
import {Link} from "react-router-dom";

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

let getDateString = (): string => {
    const monthNames: Array<string> = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let date: Date = new Date(),
        day: number = date.getUTCDate(),
        month: string = monthNames[date.getMonth()],
        year: number = date.getFullYear();
    return ` ${month} ${day}, ${year}`;
}

export default _ProfileNavRow;