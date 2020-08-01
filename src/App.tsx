import React, {lazy, Suspense} from 'react';
import './css/App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from "./Utility/Routes";

const NavBar = lazy(() => import("./Components/Navbar/NavBar"));
const TestScreen = lazy(() => import('./Screens/HomeScreen'));

function App() {
    return (
        <div className="App">
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <NavBar/>
                    <Switch>
                        <Route path={routes.home} component={TestScreen}/>
                    </Switch>
                </Suspense>
            </Router>
        </div>
    );
}

export default App;
