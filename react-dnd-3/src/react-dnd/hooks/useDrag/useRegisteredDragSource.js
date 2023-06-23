/*
 * @Author: xinxu
 * @Date: 2023-06-18 16:00:40
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-23 11:06:15
 * @FilePath: /react-dnd/react-dnd-3/src/react-dnd/hooks/useDrag/useRegisteredDragSource.js
 */
import { useLayoutEffect } from "react";
import useDragDropManager from "../useDragDropManager";
import useDragSource from "./useDragSource";
import useDragType from "./useDragType";
import { registerSource } from "../../internals";
/**
 * 注册拖动源 创建一个拖动源，并注册到注册表中，返回handlerId
 * @param {*} spec
 * @param {*} monitor
 * @param {*} connector
 */
function useRegisteredDragSource(spec, monitor, connector) {
  // 获取管理器
  const manager = useDragDropManager();
  // 创建拖动源实例
  const dragSource = useDragSource(spec, monitor, connector);
  console.log(dragSource);
  // 获取拖动源类型
  const itemType = useDragType(spec);
  console.log("itemType", itemType);
  useLayoutEffect(() => {
    // 获取拖动源在注册表的handlerId(把拖动源注册到注册表中进行编号)
    const handlerId = registerSource(itemType, dragSource, manager);
    monitor.receiveHandlerId(handlerId);
    // 连接器通过唯一表示符handlerId连接DOM和dnd系统
    connector.receiveHandlerId(handlerId);
    console.log(manager.globalMonitor.registry.dragSource);
    console.log(manager.globalMonitor.registry.types);
  }, [connector, dragSource, itemType, manager, monitor]);
}

export default useRegisteredDragSource;
