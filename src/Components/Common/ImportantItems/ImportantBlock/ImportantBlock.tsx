import React from "react";
import BlockItem, {BlockItemPropsType} from "./BlockItem/BlockItem";
import BlockWithHeader from "../../BlockWithHeader/BlockWithHeader";

type mapStateToProps = {
    header: string,
    items: Array<BlockItemPropsType>
}

type propsType = mapStateToProps;

let ImportantBlock: React.FC<propsType> = (props) => {
    return (
        <BlockWithHeader header={props.header}>
            {props.items.map((e) =>
                <BlockItem key={e.name} photoUrl={e.photoUrl} name={e.name} price={e.price}
                           oldPrice={e.oldPrice}/>)}
        </BlockWithHeader>
    )
}

export default ImportantBlock;
