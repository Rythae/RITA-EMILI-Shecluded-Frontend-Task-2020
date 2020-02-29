import * as actionTypes from '../actions/actions';

const initialState = {
    catbreeds: [],
    imageUrl:  [],
};

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.FETCH_CATS:
            return {
                ...state,
                catbreeds: state.catbreeds.concat(action.payload)
            }
        default:
            return state;
    }
};

export default reducer;