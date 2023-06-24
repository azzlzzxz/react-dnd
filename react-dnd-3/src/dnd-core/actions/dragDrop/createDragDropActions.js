/*
 * @Author: xinxu
 * @Date: 2023-06-23 11:49:30
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-23 12:00:58
 * @FilePath: /react-dnd/react-dnd-3/src/dnd-core/actions/dragDrop/createDragDropActions.js
 */
import createBeginDrag from "./beginDrag";
import createEndDrag from "./endDrag";

function createDragDropActions(manager) {
  return {
    beginDrag: createBeginDrag(manager),
    endDrag: createEndDrag(manager),
  };
}

export default createDragDropActions;
