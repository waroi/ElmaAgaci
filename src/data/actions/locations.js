import {store} from '../../store';

export function setBasket(basket) {
    store.dispatch({
        type: 'SET_BASKET',
        payload: {
            basket
        }
    });
}

