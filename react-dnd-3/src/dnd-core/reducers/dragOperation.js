/*
 * @Author: xinxu
 * @Date: 2023-06-23 11:40:10
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-23 11:43:19
 * @FilePath: /react-dnd/react-dnd-3/src/dnd-core/reducers/dragOperation.js
 */
import { BEGIN_DRAG, END_DRAG } from "../actions/dragDrop";
const initialState = {
  itemType: null,
  item: null,
  sourceId: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case BEGIN_DRAG:
      return {
        itemType: action.payload.itemType,
        item: action.payload.item,
        sourceId: action.payload.sourceId,
      };
    case END_DRAG:
      return initialState;
    default:
      return state;
  }
}

export default reducer;
