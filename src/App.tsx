import React, {Suspense, lazy} from 'react';
import './css/App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const TestScreen = lazy(() => import('./Screens/TestScreen'));

function App() {
    return (
        <div className="App">
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path="/" component={TestScreen}/>
                    </Switch>
                </Suspense>
            </Router>
        </div>
    );
}

export default App;
