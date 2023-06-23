/*
 * @Author: xinxu
 * @Date: 2023-06-17 22:18:49
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-17 22:43:35
 * @FilePath: /react-dnd/src/react-dnd/hooks/useDrag/useDragSourceMonitor.js
 */
import { useMemo } from "react";
import useDragDropManager from "../useDragDropManager";
import { DragSourceMonitorImpl } from "../../internals";
// 创建拖动源的监听器
function useDragSourceMonitor() {
  // 创建监听器需要用到管理器
  const manager = useDragDropManager();

  return useMemo(() => new DragSourceMonitorImpl(manager), [manager]);
}

export default useDragSourceMonitor;
