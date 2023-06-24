/*
 * @Author: xinxu
 * @Date: 2023-06-23 11:23:20
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-23 11:36:24
 * @FilePath: /react-dnd/react-dnd-3/src/dnd-core/actions/dragDrop/beginDrag.js
 */
import { BEGIN_DRAG } from "./types";
export default function createBeginDrag(manager) {
  return function beginDrag(sourceId) {
    //  获取全局监听器
    const monitor = manager.getGlobalMonitor();
    // 获取全局注册表
    const registry = manager.getRegistry();
    // 获取拖动源
    const source = registry.getSource(sourceId);
    // 通过useDrag的spec获取item
    const item = source.beginDrag();
    const itemType = registry.getSourceType(sourceId);
    return {
      type: BEGIN_DRAG,
      payload: {
        itemType,
        item,
        sourceId,
      },
    };
  };
}
