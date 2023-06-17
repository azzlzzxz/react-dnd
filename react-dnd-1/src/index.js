/*
 * @Author: xinxu
 * @Date: 2023-06-17 16:17:02
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-17 22:08:13
 * @FilePath: /react-dnd/src/index.js
 */
import React from "react";
import ReactDOM from "react-dom";
import { DndProvider } from "./react-dnd";
import { HTML5Backend } from "./react-dnd-html5-backend";
import Container from "./Container";
ReactDOM.render(
  <DndProvider backend={HTML5Backend}>
    <Container />
  </DndProvider>,
  document.getElementById("root")
);
