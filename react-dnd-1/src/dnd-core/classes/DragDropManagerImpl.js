/*
 * @Author: xinxu
 * @Date: 2023-06-17 21:34:57
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-17 22:33:50
 * @FilePath: /react-dnd/src/dnd-core/classes/DragDropManagerImpl.js
 */

// 拖放管理器实现类
class DragDropManagerImpl {
  store;
  backend;
  globalMonitor; // 全局监听器
  constructor(store, globalMonitor) {
    this.store = store;
    this.globalMonitor = globalMonitor;
  }
  // 注册后端
  receiveBackend(backend) {
    this.backend = backend;
  }

  getBackend() {
    return this.backend;
  }

  getGlobalMonitor() {
    return this.globalMonitor;
  }
}

export default DragDropManagerImpl;
