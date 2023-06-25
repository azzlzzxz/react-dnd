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
