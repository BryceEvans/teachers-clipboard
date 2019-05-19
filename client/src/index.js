import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

import {observe} from '../src/components/DND/ClassroomGrid/Game'
import Board from '../src/components/DND/ClassroomGrid/Board'

const root = document.getElementById('root')

// observe(knightPosition =>
//   ReactDOM.render(<Board knightPosition={knightPosition} />, root),
//   )
  
observe(knightPosition =>
ReactDOM.render(
  <Router>
      <App knightPosition={knightPosition} />}/>
  </Router>, root))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
