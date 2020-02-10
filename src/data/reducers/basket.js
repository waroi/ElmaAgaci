let initialState = {
    basket: []
};

export default function basket(state = initialState, action) {
    switch (action.type) {
        case 'SET_BASKET':
            return Object.assign({}, state, {basket: action.payload.basket});
        default:
            return state;
    }
}
