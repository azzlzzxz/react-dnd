/*
 * @Author: xinxu
 * @Date: 2023-06-17 18:53:19
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-17 22:09:21
 * @FilePath: /react-dnd/src/react-dnd/core/DndProvider.js
 */
import React from "react";
import DndContext from "./DndContext";
import createDragDropManager from "../../dnd-core/createDragDropManager";

function DndProvider({ children, backend }) {
  let value = { dragDropManager: createDragDropManager(backend) };
  console.log("value", value);
  return <DndContext.Provider value={value}>{children}</DndContext.Provider>;
}

export default DndProvider;
