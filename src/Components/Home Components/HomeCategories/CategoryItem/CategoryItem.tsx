import React from "react";
import styles from "./CategoryItem.module.scss";
import {Link} from "react-router-dom";
import routes from "../../../../Constants/Routes";

type mapStateToProps = {
    photoUrl: string,
    category: string
}

type mapDispatchToProps = {}

type propsType = mapDispatchToProps & mapStateToProps;

let CategoryItem: React.FC<propsType> = (props) => {
    return (
        <Link to={routes.category(props.category)}>
            <div className={styles.wrapper}>
                <img className={styles.image} src={props.photoUrl} alt={props.category}/>
                <div className={styles.absoluteWrapper}>
                    <div className={styles.textBlock}>
                        {props.category}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CategoryItem;
