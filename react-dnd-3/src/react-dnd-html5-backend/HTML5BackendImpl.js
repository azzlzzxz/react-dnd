/*
 * @Author: xinxu
 * @Date: 2023-06-17 17:25:30
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-23 12:09:41
 * @FilePath: /react-dnd/react-dnd-3/src/react-dnd-html5-backend/HTML5BackendImpl.js
 */
// 复制绑定DOM事件，修改状态，派发动作
class HTML5BackendImpl {
  manager;
  actions;
  dragStartHandlerId; // 当前被拖动的 拖动源ID
  constructor(manager) {
    this.actions = manager.getActions();
  }

  setup = () => {
    this.addEventListener(window);
  };

  //绑定的是window
  addEventListener(target) {
    target.addEventListener("dragstart", this.handleTopDragStart);
    target.addEventListener("dragend", this.handleTopDragEndCapture, true);
  }

  handleTopDragStart = () => {
    this.actions.beginDrag(this.dragStartHandlerId);
  };

  handleTopDragEndCapture = () => {
    this.actions.endDrag();
  };

  // 连接，把真实DOM节点和dnd系统进行关联
  connectDragSource = (handlerId, domNode) => {
    domNode.setAttribute("draggable", true);
    domNode.addEventListener("dragstart", () =>
      this.handleDragStart(handlerId)
    );
  };

  handleDragStart = (handlerId) => {
    this.dragStartHandlerId = handlerId;
  };
}

export default HTML5BackendImpl;
