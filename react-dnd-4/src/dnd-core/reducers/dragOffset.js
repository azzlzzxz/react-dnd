import { BEGIN_DRAG, END_DRAG, HOVER } from '../actions/dragDrop';
const initialState = {
    clientOffset: {}
}
function reducer(state = initialState, action) {
    const { payload } = action;
    switch (action.type) {
        case BEGIN_DRAG:
            return { clientOffset: payload.clientOffset };
        case HOVER:
            return { clientOffset: payload.clientOffset };
        case END_DRAG:
            return initialState;
        default:
            return state;
    }
}

export default reducer;