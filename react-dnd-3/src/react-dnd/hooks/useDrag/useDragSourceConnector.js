/*
 * @Author: xinxu
 * @Date: 2023-06-18 15:40:59
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-18 15:53:07
 * @FilePath: /react-dnd/react-dnd-2/src/react-dnd/hooks/useDrag/useDragSourceConnector.js
 */
import { useMemo } from "react";
import useDragDropManager from "../useDragDropManager";
import { SourceConnector } from "../../internals";

// 创建拖动源的连接器
function useDragSourceConnector() {
  // 先获取管理器
  const manager = useDragDropManager();
  // 创建一个拖动源的连接器
  const connector = useMemo(
    () => new SourceConnector(manager.getBackend()),
    [manager]
  );

  return connector;
}

export default useDragSourceConnector;
