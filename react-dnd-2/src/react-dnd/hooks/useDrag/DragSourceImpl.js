/*
 * @Author: xinxu
 * @Date: 2023-06-18 16:07:16
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-18 16:07:29
 * @FilePath: /react-dnd/react-dnd-2/src/react-dnd/hooks/useDrag/DragSourceImpl.js
 */
class DragSourceImpl {
  spec;
  monitor;
  connector;
  constructor(spec, monitor, connector) {
    this.spec = spec;
    this.monitor = monitor;
    this.connector = connector;
  }
}

export default DragSourceImpl;
