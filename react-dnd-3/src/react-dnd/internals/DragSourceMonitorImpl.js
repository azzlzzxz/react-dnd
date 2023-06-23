/*
 * @Author: xinxu
 * @Date: 2023-06-17 22:27:01
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-18 16:53:44
 * @FilePath: /react-dnd/react-dnd-2/src/react-dnd/internals/DragSourceMonitorImpl.js
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
}

export default DragSourceMonitorImpl;
