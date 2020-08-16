import React, {lazy, Suspense, useEffect, useState} from 'react';
import './css/App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from "./Utility/Routes";
import {connect} from "react-redux";
import {fetchAndSetShopItems} from "./Reducers/ShopReducer";

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
                <Suspense fallback={<div>Loading...</div>}>
                    <NavBar/>
                    <Switch>
                        <Route path={routes.home} component={HomeScreen}/>
                    </Switch>
                </Suspense>
            </Router>
        </div>
    );
}

let App = connect<null, mapDispatchToPropsType, any, any>(null, {fetchAndSetShopItems})(_App);

export default App;
