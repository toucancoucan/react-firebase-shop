import React from "react";
import styles from "./ImportantBlock.module.scss";
import BlockItem, {BlockItemPropsType} from "./BlockItem/BlockItem";

type mapStateToProps = {
    header: string,
    items: Array<BlockItemPropsType>
}

type propsType = mapStateToProps;

let ImportantBlock: React.FC<propsType> = (props) => {

    console.log(props)
    return (
        <div className={styles.wrap}>
            <div className={styles.header}>
                {props.header}
            </div>
            <div className={styles.container}>
                {props.items.map((e) =>
                    <BlockItem key={e.name} photoUrl={e.photoUrl} name={e.name} price={e.price}
                               oldPrice={e.oldPrice}/>)}
            </div>

        </div>
    )
}

export default ImportantBlock;
