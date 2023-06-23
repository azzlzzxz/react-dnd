/*
 * @Author: xinxu
 * @Date: 2023-06-17 17:25:30
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-23 10:49:23
 * @FilePath: /react-dnd/react-dnd-3/src/react-dnd-html5-backend/HTML5BackendImpl.js
 */
// 复制绑定DOM事件，修改状态
class HTML5BackendImpl {
  manager;
  dragStartHandlerId; // 当前被拖动的 拖动源ID
  constructor(manager) {
    // 关联管理器
    this.manager = manager;
  }

  // 连接，把真实DOM节点和dnd系统进行关联
  connectDragSource(handlerId, domNode) {
    domNode.setAttribute("draggable", true);
    domNode.addEventListener("dragstart", () =>
      this.handleDragStart(handlerId)
    );
  }

  handleDragStart(handlerId) {
    this.dragStartHandlerId = handlerId;
  }
}

export default HTML5BackendImpl;
