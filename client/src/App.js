import React from 'react';
import TopBar from './components/TopBar/TopBar';
import Dashboard from './components/Dashboard/Dashboard';
import SplashMain from './components/SplashPage/SplashMain'


const App = () => {
    return (
        <div>
            <SplashMain />
            <TopBar />
            <Dashboard />
        </div>
    );
}


export default App;
