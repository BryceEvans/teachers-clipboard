import React, { Component } from 'react';
import TopBar from './components/TopBar/TopBar';
import Dashboard from './components/Dashboard/Dashboard';

import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import {observe} from '../src/components/DND/ClassroomGrid/Game'


class App extends Component {
  
  render() {
    return (
        <div>
            <TopBar />

            <DragDropContextProvider backend={HTML5Backend}>
                <Dashboard knightPosition={this.props}/>                
            </DragDropContextProvider>
        </div>
    );
  }
}


export default App;
