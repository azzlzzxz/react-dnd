/*
 * @Author: xinxu
 * @Date: 2023-06-18 15:45:41
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-18 16:52:59
 * @FilePath: /react-dnd/react-dnd-2/src/react-dnd/internals/SourceConnector.js
 */

// 拖动源连接器，连接真实DOM节点和dnd系统
class SourceConnector {
  backend;
  handlerId; // dnd系统中的拖动源
  constructor(backend) {
    this.backend = backend;
  }

  connect() {
    console.log("连接");
  }

  receiveHandlerId(handlerId) {
    this.handlerId = handlerId;
  }
}

export default SourceConnector;
