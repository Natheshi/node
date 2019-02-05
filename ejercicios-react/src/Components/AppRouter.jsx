import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// se puede poner un alias a los import con as (BrouserRouter as 'XXX')

const Home = () => (
    <div>
        Home
    </div>
);

const Error404 = () => (
    <div>
        Error404
    </div>
);

const AppRouter = () => {
    return (
        //BrouserRouter solo admite 1 hijo, sin el div fallaría
        <BrowserRouter>
            <div>
                <Route path={'/'} component={Home}/>
                <Route path={'*'} component={Error404}/>

            </div>
        </BrowserRouter>

    );
};

export default AppRouter;