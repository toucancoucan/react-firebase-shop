import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import styles from "./HomeScreen.module.scss"
import HeaderSubHeader from "../../Components/Common/HeaderSubHeader/HeaderSubHeader";
import ItemSpinner from "../../Components/ItemSpinner/ItemSpinner";
import withTitleChange from "../../Components/Common/HOC/withTitleChange";
import titles from "../../Constants/Titles";
import HomeCategories from "../../Components/HomeCategories/HomeCategories";
import EmptySpace from "../../Components/Common/EmptySpace/EmptySpace";
import SaleBlock from "../../Components/SaleBlock/SaleBlock";
import ImportantItems from "../../Components/ImportantItems/ImportantItems";

let HomeScreen: React.FC = () => {
    return (
        <div>
            <Carousel/>
            <div className={styles.container}>
                <EmptySpace height={"1rem"}/>
                <HeaderSubHeader mainText={"Trending"} subText={"Most trendy clothes"}/>
                <ItemSpinner/>
                <EmptySpace height={"5rem"}/>
                <HomeCategories/>
                <EmptySpace height={"3rem"}/>
                <SaleBlock/>
                <EmptySpace height={"3rem"}/>
                <ImportantItems/>
                <EmptySpace height={"1rem"}/>
                <div style={{background: "orange", height: 500}}/>
            </div>
        </div>
    )
};

HomeScreen = withTitleChange(HomeScreen, titles.home);

export default HomeScreen;