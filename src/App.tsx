import React, {lazy, Suspense, useEffect, useState} from 'react';
import './css/App.scss';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import routes from "./Constants/Routes";
import {connect} from "react-redux";
import {fetchAndSetShopItems} from "./Reducers/ShopReducer";
import Preloader from "./Components/Preloader/Preloader";
import addShopItemToFirebase from "./Firebase/Queries/addShopItemToFirebase";
import Footer from "./Components/Footer/Footer";

const NavBar = lazy(() => import("./Components/Navbar/NavBar"));
const HomeScreen = lazy(() => import('./Screens/HomeScreen/HomeScreen'));
const NotFoundScreen = lazy(() => import("./Screens/NotFoundScreen/NotFoundScreen"));
const ProductScreen = lazy(() => import("./Screens/ProductScreen/ProductScreenContainer"));
const ShopScreen = lazy(() => import("./Screens/ShopScreen/ShopScreenContainer"));
const ContactScreen = lazy(() => import("./Screens/ContactScreen/ContactScreen"))

type mapDispatchToPropsType = {
    fetchAndSetShopItems: () => void,
}

type propsType = mapDispatchToPropsType;

let _App: React.FC<propsType> = (props) => {

    const [isItemsFetched, setIsItemsFetched] = useState(false);
    useEffect(() => {
        if (!isItemsFetched) {
            props.fetchAndSetShopItems();
            setIsItemsFetched(true);
        }
    }, [isItemsFetched, props])

    return (
        <div className="appWrap">
            <Router>
                <Suspense fallback={<Preloader/>}>
                    <NavBar/>
                    <div className={"mainContent"}>
                        <Switch>
                            <Route path={routes.home} component={HomeScreen}/>
                            <Route exact={false} strict={false} path={routes.shopPath} component={ShopScreen}/>
                            <Route path={"/admin"}>
                                <button onClick={addShopItemToFirebase}>
                                    Add
                                </button>
                            </Route>
                            <Route path={routes.notFound} component={NotFoundScreen}/>
                            <Route path={routes.contact} component={ContactScreen}/>
                            <Route exact={false} strict={false} path={routes.productPath} component={ProductScreen}/>
                            <Redirect exact from="/" to="/home"/>
                            <Redirect from="*" to={routes.notFound}/>
                        </Switch>
                    </div>
                    <Footer/>
                </Suspense>
            </Router>
        </div>
    );
}

let App = connect<null, mapDispatchToPropsType, any, any>(null, {fetchAndSetShopItems})(_App);

export default App;
