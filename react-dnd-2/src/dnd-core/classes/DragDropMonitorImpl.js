/*
 * @Author: xinxu
 * @Date: 2023-06-17 22:35:26
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-18 15:29:50
 * @FilePath: /react-dnd/react-dnd-2/src/dnd-core/classes/DragDropMonitorImpl.js
 */

// 全局监听器
class DragDropMonitorImpl {
  store;
  registry;
  constructor(store, registry) {
    this.store = store;
    this.registry = registry;
  }
}

export default DragDropMonitorImpl;
