import React from "react";





export type mapStateToPropsType = {
    userName: string | null
}
export type propsType = mapStateToPropsType;

let ProfileNavRow: React.FC<propsType> = (props) => {
    let content = props.userName == null ? <><a href={"/login"}> LOGIN </a> or <a href={"/register"}> REGISTER </a></>
        : <a href={"/profile"}>{props.userName} </a>
    return (
        <div>
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


export default ProfileNavRow;