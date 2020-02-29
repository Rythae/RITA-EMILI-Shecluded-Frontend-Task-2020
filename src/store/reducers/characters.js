import * as actionTypes from '../actions/actions';

const initialState = {
    characters: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CHARACTERS: 
            return {
                ...state,
                characters: state.characters.concat(action.result)
            }
        default:
            return state;
    }
}

export default reducer;
