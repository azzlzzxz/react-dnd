/*
 * @Author: xinxu
 * @Date: 2023-06-17 21:34:57
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-23 12:01:52
 * @FilePath: /react-dnd/react-dnd-3/src/dnd-core/classes/DragDropManagerImpl.js
 */

import { createDragDropActions } from "../actions/dragDrop";
import { bindActionCreators } from "redux";

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
    this.backend.setup();
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

  getActions() {
    const actions = createDragDropActions(this);
    return bindActionCreators(actions, this.store.dispatch);
  }
}

export default DragDropManagerImpl;
