/*
 * @Author: xinxu
 * @Date: 2023-06-17 18:59:07
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-17 22:36:04
 * @FilePath: /react-dnd/src/dnd-core/createDragDropManager.js
 */
import { createStore } from "redux";
import reducer from "./reducers";
import DragDropManagerImpl from "./classes/DragDropManagerImpl";
import DragDropMonitorImpl from "./classes/DragDropMonitorImpl";
// 创建管理器，管理所有的东西
function createDragDropManager(backendFactory) {
  // 存放Dnd项目状态
  const store = createStore(reducer);

  const globalMonitor = new DragDropMonitorImpl(store);
  // 创建管理器实例
  const manager = new DragDropManagerImpl(store, globalMonitor);

  const backend = backendFactory(manager);
  // 再manager中关联backend
  manager.receiveBackend(backend);

  return manager;
}

export default createDragDropManager;
