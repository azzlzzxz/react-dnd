/*
 * @Author: xinxu
 * @Date: 2023-06-17 16:17:02
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-25 13:35:54
 * @FilePath: /react-dnd/react-dnd-1/src/Card.js
 */
import React, { useRef } from "react";
import { useDrag } from "./react-dnd";
import { CARD } from "./ItemTypes";
const style = {
  backgroundColor: "red",
  padding: "5px",
  margin: "5px",
  border: "1px dashed gray",
  cursor: "move",
};

export default function Card({ id, text, index, moveCard }) {
  let ref = useRef();
  // let [, drop] = useDrop({
  //     accept: CARD,
  //     collect: () => ({}),
  //     hover(item, monitor) {
  //         const dragIndex = item.index;
  //         const hoverIndex = index;
  //         if (dragIndex === hoverIndex) {
  //             return;
  //         }

  //         const { top, bottom } = ref.current.getBoundingClientRect();
  //         const halfOfHoverHeight = (bottom - top) / 2;
  //         const { y } = monitor.getClientOffset();//event.clientY
  //         const hoverClientY = y - top;
  //         if ((dragIndex < hoverIndex && hoverClientY > halfOfHoverHeight)
  //             || (dragIndex > hoverIndex && hoverClientY < halfOfHoverHeight)
  //         ) {
  //             moveCard(dragIndex, hoverIndex);
  //             item.index = hoverIndex;
  //         }
  //     }
  // });

  let [{ isDragging }, drag] = useDrag({
    //spec 规范或者说规格
    type: CARD,
    //必需的是一个函数或者说对象，它是一个用于描述拖动源的普通JS对象
    item: () => ({ id, index }),
    //收集功能，用来收集属性的，返回一个JS对象，并且返回值会合并到你的组件属性中
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.1 : 1;
  drag(ref);
  // drop(ref);

  return (
    <div ref={ref} style={{ ...style, opacity }}>
      {text}
    </div>
  );
}
