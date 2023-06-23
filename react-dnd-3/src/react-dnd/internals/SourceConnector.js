/*
 * @Author: xinxu
 * @Date: 2023-06-18 15:45:41
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-23 11:12:46
 * @FilePath: /react-dnd/react-dnd-3/src/react-dnd/internals/SourceConnector.js
 */

// 拖动源连接器，连接真实DOM节点和dnd系统
class SourceConnector {
  backend;
  handlerId; // dnd系统中的拖动源
  dragSourceRef; // 真实DOM节点
  constructor(backend) {
    this.backend = backend;
  }

  // 接收dnd对象
  receiveHandlerId(handlerId) {
    this.handlerId = handlerId;
    this.connect();
  }

  connect() {
    if (!this.handlerId || !this.dragSourceRef) {
      return;
    }
    this.backend.connectDragSource(this.handlerId, this.dragSourceRef.current);
  }

  // 接收真实DOM节点
  receiveDragSource() {
    return (dragSourceRef) => (this.dragSourceRef = dragSourceRef);
  }
}

export default SourceConnector;
