/*
 * @Author: xinxu
 * @Date: 2023-06-17 16:17:02
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-17 22:39:10
 * @FilePath: /react-dnd/src/Card.js
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
//useDrag 对应的项目拖动源  DragSource useDrop对应的项目叫放置目标 DropTarget
export default function Card({ id, text, index, moveCard }) {
  let ref = useRef(); //{current:null} div 生成真实DOM后，会把DOM赋给ref.current
  // let [, drop] = useDrop({
  //     //一个字符串，这个放置目标只会对指定类型的拖动源发生反应
  //     accept: CARD,
  //     collect: () => ({}),
  //     hover(item, monitor) {
  //         //获取被拖动的卡片的索引 0
  //         const dragIndex = item.index;//0
  //         //当前正在hover卡片的索引 1
  //         const hoverIndex = index;//1
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
  //useDrag hook提供一种将组件作为拖动源连接 到React DnD系统中的方法
  //DragSource Ref 拖动源的连接器，连接 你的真实DOM和你的React Dnd系统
  let [{ isDragging }, drag] = useDrag({
    //spec 规范或者说规格
    type: CARD,
    //必需的是一个函数或者说对象，它是一个用于描述拖动源的普通JS对象
    item: () => ({ id, index }),
    //收集功能，用来收集属性的，返回一个JS对象，并且返回值会合并到你的组件属性中
    //monitor里面存放的是一些拖动的状态，当拖动状态发生变化时通知组件生新获取 属性并进行刷新组件
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.1 : 1;
  drag(ref); //drag
  // drop(ref);

  return (
    <div ref={ref} style={{ ...style, opacity }}>
      {text}
    </div>
  );
}
