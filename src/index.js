import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Starter from './components/test';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Starter />, document.getElementById('root'));
ReactDOM.render(<App tabs={tabs} firstSelect={1} />, document.getElementById('app'));
registerServiceWorker();
