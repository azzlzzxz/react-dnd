/*
 * @Author: xinxu
 * @Date: 2023-06-17 22:35:26
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-23 11:56:26
 * @FilePath: /react-dnd/react-dnd-3/src/dnd-core/classes/DragDropMonitorImpl.js
 */

// 全局监听器
class DragDropMonitorImpl {
  store;
  registry;
  constructor(store, registry) {
    this.store = store;
    this.registry = registry;
  }

  subscribeStateChange(listener) {
    return this.store.subscribe(listener);
  }

  isDraggingSource(handlerId) {
    return handlerId === this.getSourceId();
  }

  getSourceId() {
    // 获取当前被拖动的handlerId
    // return "S0";
    return this.store.getState().dragOperation.sourceId;
  }
}

export default DragDropMonitorImpl;
