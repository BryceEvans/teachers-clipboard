import React, { useContext } from 'react';
import TopBar from './components/TopBar/TopBar';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => {
    return (
        <div>
            <TopBar />
            <Dashboard />                
        </div>
    );
}


export default App;
