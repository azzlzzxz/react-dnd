/*
 * @Author: xinxu
 * @Date: 2021-10-27 00:35:24
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-25 13:42:52
 * @FilePath: /react-dnd/react-dnd-4/src/dnd-core/createDragDropManager.js
 */
import { createStore } from "redux";
import reducer from "./reducers";
import DragDropManagerImpl from "./classes/DragDropManagerImpl";
import DragDropMonitorImpl from "./classes/DragDropMonitorImpl";
import HandlerRegistryImpl from "./classes/HandlerRegistryImpl";
/**
 * 创建拖拽管理 器的工具
 * 管理器就相当 于总经理，管理 着所有的东西
 * 整个Dnd应用的状态会放在redux的仓库store
 */

function createDragDropManager(backendFactory) {
  //创建一个仓库存放Dnd项目的状态或者说数据
  const store = createStore(reducer);
  //创建注册表
  const registry = new HandlerRegistryImpl(store);
  //创建监听器
  const globalMonitor = new DragDropMonitorImpl(store, registry);
  //再创建管理器
  const manager = new DragDropManagerImpl(store, globalMonitor);
  const backend = backendFactory(manager);
  manager.receiveBackend(backend);
  return manager;
}

export default createDragDropManager;
