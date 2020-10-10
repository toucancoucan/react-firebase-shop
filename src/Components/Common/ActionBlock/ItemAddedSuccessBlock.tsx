import React from "react";
import ActionBlock from "./ActionBlock";
import routes from "../../../Constants/Routes";
import LinkButton from "../LinkButton/LinkButton";


type mapStateToProps = {
    productName: string
}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let ItemAddedSuccessBlock: React.FC<propsType> = (props) => {
    let text: string = `"${props.productName}" has been added to your cart.`;
    return (
        <ActionBlock showButton color={"green"} text={text}
                     button={<LinkButton url={routes.cart} text={"View cart"} color={"dark"}/>}/>
    )
}

export default ItemAddedSuccessBlock;
