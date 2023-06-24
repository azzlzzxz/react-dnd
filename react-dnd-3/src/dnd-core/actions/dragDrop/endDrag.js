/*
 * @Author: xinxu
 * @Date: 2023-06-23 11:37:20
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-23 11:37:29
 * @FilePath: /react-dnd/react-dnd-3/src/dnd-core/actions/dragDrop/endDrag.js
 */
import { END_DRAG } from "./types";
export default function createEndDrag() {
  return function endDrag() {
    return {
      type: END_DRAG,
    };
  };
}
