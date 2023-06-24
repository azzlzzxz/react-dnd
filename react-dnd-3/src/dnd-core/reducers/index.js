/*
 * @Author: xinxu
 * @Date: 2023-06-23 09:13:19
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-23 11:40:05
 * @FilePath: /react-dnd/react-dnd-3/src/dnd-core/reducers/index.js
 */
import { combineReducers } from "redux";
import dragOperation from "./dragOperation";

const reducers = {
  dragOperation,
};

export default combineReducers(reducers);
