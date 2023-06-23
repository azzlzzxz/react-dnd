/*
 * @Author: xinxu
 * @Date: 2023-06-18 16:20:51
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-18 16:22:05
 * @FilePath: /react-dnd/react-dnd-2/src/react-dnd/internals/registerSource.js
 */
function registerSource(type, dragSource, manager) {
  const registry = manager.getRegistry();
  const handlerId = registry.addSource(type, dragSource);
  return handlerId;
}

export default registerSource;
