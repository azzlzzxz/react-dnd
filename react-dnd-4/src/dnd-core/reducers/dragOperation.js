import { BEGIN_DRAG, END_DRAG } from '../actions/dragDrop';
const initialState = {
    itemType: null,
    item: null,
    sourceId: null
}
function reducer(state = initialState, action) {
    const { payload } = action;
    switch (action.type) {
        case BEGIN_DRAG:
            return {
                ...state,
                itemType: payload.itemType,
                item: payload.item,
                sourceId: payload.sourceId
            }
        case END_DRAG:
            return {
                ...state,
                itemType: null,
                item: null,
                sourceId: null
            }
        default:
            return state;
    }
}

export default reducer;