/**
 * 负责绑定DOM事件，修改状态
 * 然后派发action动作 
 */
class HTML5BackendImpl {
    manager
    actions
    dragStartHandlerId //这是一个变量，记录当前被 拖动的处理器ID
    dragOverTargetId
    constructor(manager) {
        this.actions = manager.getActions();
    }
    setup = () => {
        this.addEventListener(window);
    }
    //绑定的是window
    addEventListener(target) {
        target.addEventListener('dragstart', this.handleTopDragStart);
        target.addEventListener('dragover', this.handleTopDragOver);
        target.addEventListener('dragend', this.handleTopDragEndCapture, true);
    }
    handleTopDragStart = () => {
        this.actions.beginDrag(this.dragStartHandlerId);
    }
    handleTopDragOver = (event) => {
        this.actions.hover(this.dragOverTargetId, {
            clientOffset: getEventClientOffset(event)
        });
    }
    handleTopDragEndCapture = () => {
        this.actions.endDrag();
    }
    //绑定的是具体的卡片之类的拖动DOM元素
    connectDragSource = (handlerId, domNode) => {
        domNode.setAttribute('draggable', true);
        domNode.addEventListener('dragstart', (event) => this.handleDragStart(event, handlerId));
    }
    handleDragStart(event, handlerId) {
        this.dragStartHandlerId = handlerId;
    }
    handleDragOver = (event, targetId) => {
        this.dragOverTargetId = targetId;
    }
    connectDropTarget(targetId, domNode) {
        domNode.addEventListener('dragover', (event) => this.handleDragOver(event, targetId));
    }
}
export default HTML5BackendImpl;

function getEventClientOffset(event) {
    let offset = {
        x: event.clientX,
        y: event.clientY
    }
    return offset;
}