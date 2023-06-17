/*
 * @Author: xinxu
 * @Date: 2023-06-17 22:27:01
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-17 22:37:56
 * @FilePath: /react-dnd/src/react-dnd/internals/DragSourceMonitorImpl.js
 */
// 拖动源监听器
// 内部会有属性指向全局监听器
class DragSourceMonitorImpl {
  internalMonitor;
  constructor(manager) {
    this.internalMonitor = manager.getGlobalMonitor();
  }
}

export default DragSourceMonitorImpl;
