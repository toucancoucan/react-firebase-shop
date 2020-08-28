import React, {lazy, Suspense, useEffect, useState} from 'react';
import './css/App.scss';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import routes from "./Constants/Routes";
import {connect} from "react-redux";
import {fetchAndSetShopItems} from "./Reducers/ShopReducer";
import Preloader from "./Components/Preloader/Preloader";
import addShopItemToFirebase from "./Functions/addShopItemToFirebase";
import Footer from "./Components/Footer/Footer";

const NavBar = lazy(() => import("./Components/Navbar/NavBar"));
const HomeScreen = lazy(() => import('./Screens/HomeScreen/HomeScreen'));


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
        <div className="App">
            <Router>
                <Suspense fallback={<Preloader/>}>
                    <NavBar/>
                    <Switch>
                        <Route path={routes.home} component={HomeScreen}/>
                        <Route path={"/admin"}>
                            <button onClick={addShopItemToFirebase}>
                                Add
                            </button>
                        </Route>
                        <Redirect exact from="/" to="/home"/>
                    </Switch>
                    <Footer/>
                </Suspense>
            </Router>
        </div>
    );
}

let App = connect<null, mapDispatchToPropsType, any, any>(null, {fetchAndSetShopItems})(_App);

export default App;
