/*
 * @Author: xinxu
 * @Date: 2023-06-17 22:20:57
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-17 22:43:58
 * @FilePath: /react-dnd/src/react-dnd/hooks/useDragDropManager.js
 */
import { DndContext } from "../core";
import { useContext } from "react";

function useDragDropManager() {
  const value = useContext(DndContext);

  return value.dragDropManager;
}

export default useDragDropManager;
