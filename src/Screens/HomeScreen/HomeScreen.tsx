import React from "react";
import Carousel from "../../Components/Home Components/Carousel/Carousel";
import styles from "./HomeScreen.module.scss"
import HeaderSubHeader from "../../Components/Common/HeaderSubHeader/HeaderSubHeader";
import ItemSpinner from "../../Components/Home Components/ItemSpinner/ItemSpinner";
import withTitleChange from "../../Components/Common/HOC/withTitleChange";
import titles from "../../Constants/Titles";
import HomeCategories from "../../Components/Home Components/HomeCategories/HomeCategories";
import EmptySpace from "../../Components/Common/EmptySpace/EmptySpace";
import SaleBlock from "../../Components/Home Components/SaleBlock/SaleBlock";
import ImportantItems from "../../Components/Common/ImportantItems/ImportantItems";
import LogoRow from "../../Components/Home Components/LogoRow/LogoRow";
import {photoUrls} from "../../Constants/photoUrls";

let HomeScreen: React.FC = () => {
    return (
        <>
            <Carousel/>
            <div className={styles.container}>
                <EmptySpace height={"2rem"}/>
                <HeaderSubHeader mainText={"Trending"} subText={"Most trendy clothes"}/>
                <ItemSpinner/>
                <EmptySpace height={"5rem"}/>
                <HomeCategories/>
                <EmptySpace height={"4rem"}/>
                <SaleBlock/>
                <EmptySpace height={"4rem"}/>
                <ImportantItems/>
                <EmptySpace height={"2rem"}/>
                <LogoRow photos={photoUrls.logoRow}/>
                <EmptySpace height={"1rem"}/>
            </div>
        </>
    )
};

HomeScreen = withTitleChange(HomeScreen, titles.home);

export default HomeScreen;