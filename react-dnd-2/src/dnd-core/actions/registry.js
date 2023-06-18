/*
 * @Author: xinxu
 * @Date: 2023-06-18 16:40:54
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-18 16:42:17
 * @FilePath: /react-dnd/react-dnd-2/src/dnd-core/actions/registry.js
 */
export const ADD_SOURCE = "dnd-core/ADD_SOURCE";
export function addSource(handlerId) {
  return {
    type: ADD_SOURCE,
    payload: { handlerId },
  };
}
