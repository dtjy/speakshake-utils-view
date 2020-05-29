import React from 'react';
import {
    HashRouter as Router,
} from 'react-router-dom'

import { renderRoutes } from "react-router-config";
import routes from './router'
import './App.scss';

function App() {
  return (
    <div className="App">
        <main className='App-main'>
            <Router>
                {renderRoutes(routes)}
            </Router>
        </main>
    </div>
  );
}

export default App;
