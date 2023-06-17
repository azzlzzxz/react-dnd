/*
 * @Author: xinxu
 * @Date: 2023-06-17 22:11:37
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-17 22:43:14
 * @FilePath: /react-dnd/src/react-dnd/hooks/useDrag/index.js
 */
import useDragSourceMonitor from "./useDragSourceMonitor";

// dnd中有两种monitor:1、全局monitor 2、拖动源或放置目标的monitor
// spec拖动源规格对象
function useDrag(spec) {
  // 监听器，获取数据变化
  const monitor = useDragSourceMonitor();
  console.log("monitor", monitor);
  return [{}, () => {}];
}

export default useDrag;
