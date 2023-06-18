/*
 * @Author: xinxu
 * @Date: 2023-06-17 21:34:57
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-18 16:26:13
 * @FilePath: /react-dnd/react-dnd-2/src/dnd-core/classes/DragDropManagerImpl.js
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

  getRegistry() {
    // 管理器获取监听器里的注册表
    return this.globalMonitor.registry;
  }
}

export default DragDropManagerImpl;
