import React, {Component} from 'react';
import './App.scss';

import {Provider} from 'react-redux';
import {store} from './store';
import Basket from "./Basket";
import Content from "./Content";


class App extends Component {


    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Content/>
                    <Basket/>
                </div>
            </Provider>
        );
    }
}

export default App;
