/*
 * @Author: xinxu
 * @Date: 2023-06-18 16:31:57
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-18 16:32:28
 * @FilePath: /react-dnd/react-dnd-2/src/dnd-core/utils/getNextUniqueId.js
 */
let nextUniqeId = 0;
function getNextUniqueId() {
  return nextUniqeId++;
}
export default getNextUniqueId;
