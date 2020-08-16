import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import styles from "./HomeScreen.module.scss"
import HeaderSubHeader from "../../Components/Common/HeaderSubHeader/HeaderSubHeader";
import ItemSpinner from "../../Components/ItemSpinner/ItemSpinner";

let HomeScreen = () => {
    return (
        <div>
            <Carousel/>
            <div className={styles.container}>
                <HeaderSubHeader mainText={"Trending"} subText={"Most trendy clothes"}/>
                <ItemSpinner/>
                <div style={{background: "orange", height: 500}}/>
            </div>
        </div>
    )
};


export default HomeScreen;