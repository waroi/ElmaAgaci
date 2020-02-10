import {createStore} from "redux";

import reducersCombined from './data/reducers/index';

export const store = createStore(reducersCombined);


