/*
 * @Author: xinxu
 * @Date: 2023-06-17 22:27:01
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-23 10:52:07
 * @FilePath: /react-dnd/react-dnd-3/src/react-dnd/internals/DragSourceMonitorImpl.js
 */
// 拖动源监听器
// 内部会有属性指向全局监听器
class DragSourceMonitorImpl {
  internalMonitor;
  handlerId;
  constructor(manager) {
    this.internalMonitor = manager.getGlobalMonitor();
  }
  receiveHandlerId(handlerId) {
    this.handlerId = handlerId;
  }
  subscribeStateChange(listener) {
    return this.internalMonitor.subscribeStateChange(listener);
  }
  isDragging() {
    // 通过全局监听器判断当前拖动源是谁
    return this.internalMonitor.isDraggingSource(this.handlerId);
  }
}

export default DragSourceMonitorImpl;
