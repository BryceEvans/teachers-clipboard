import React from 'react';
import { Route } from 'react-router-dom'

import Dashboard from './components/Dashboard/Dashboard';
import SplashMain from './components/SplashPage/SplashMain'
import TopNavigation from "./components/NavigationBar/TopNavigation";
import Callback from "./Authentication/Callback";
import auth from "./Authentication/Auth0"
import SecuredRoute from "./Authentication/SecuredRoute";

const App = () => {
    return (
        <div>

            <Route exact path="/" render={props => <div> <TopNavigation auth={auth} {...props} /> <SplashMain auth={auth} {...props} /> </div> } />

            <Route path="/callback" render={(props) => {return <Callback {...props} />}} />

            <SecuredRoute path='/home' component={Dashboard} auth={auth} />
            {/*<SecuredRoute path='/home' component={SplashHomeNav} auth={auth} />*/}
            {/*<SecuredRoute path='/home' component={TopBar} auth={auth} />*/}

        </div>
    );
}


export default App;
