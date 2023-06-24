/*
 * @Author: xinxu
 * @Date: 2023-06-18 16:07:16
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-23 11:34:51
 * @FilePath: /react-dnd/react-dnd-3/src/react-dnd/hooks/useDrag/DragSourceImpl.js
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

  beginDrag() {
    return this.spec.item();
  }
}

export default DragSourceImpl;
