import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore} from 'redux'
import 'bulma/css/bulma.css';
import './styles.scss';
import { carReducer } from './reducer'
import {Provider} from 'react-redux'

const store = createStore(carReducer)

console.log(store, "store");

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
