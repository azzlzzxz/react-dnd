/*
 * @Author: xinxu
 * @Date: 2023-06-17 22:11:37
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-23 11:12:23
 * @FilePath: /react-dnd/react-dnd-3/src/react-dnd/hooks/useDrag/index.js
 */
import useDragSourceMonitor from "./useDragSourceMonitor";
import useDragSourceConnector from "./useDragSourceConnector";
import useRegisteredDragSource from "./useRegisteredDragSource";
import useConnectDragSource from "./useConnectDragSource";
import useCollectedProps from "../useCollectedProps";

// dnd中有两种monitor:1、全局monitor 2、拖动源或放置目标的monitor
// spec拖动源规格对象
function useDrag(spec) {
  // 创建监听器，获取数据变化
  const monitor = useDragSourceMonitor();
  // 创建连接器，用于连接DOM和后台
  const connector = useDragSourceConnector();
  console.log("connector", connector);
  // 向dnd系统，注册拖动源的实例：1.创建拖动源实例 2.注册拖动源实例到注册表中
  useRegisteredDragSource(spec, monitor, connector);
  // return [
  //   useCollectedProps(spec.collect, monitor, connector),
  //   useConnectDragSource(connector),
  // ];
  return [useCollectedProps(spec.collect, monitor, connector), () => {}];
}

export default useDrag;
