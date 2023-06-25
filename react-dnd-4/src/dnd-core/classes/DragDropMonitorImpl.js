
class DragDropMonitorImpl {
    store
    registry
    constructor(store, registry) {
        this.store = store;
        this.registry = registry;
    }
    subscribeStateChange(listener) {
        //最终listener传递给了redux 仓库
        return this.store.subscribe(listener);
    }
    isDraggingSource(handlerId) {
        return handlerId === this.getSourceId();
    }
    getSourceId() {
        //其实这个地方应该取当前正在被 拖动的卡片的handlerId
        return this.store.getState().dragOperation.sourceId;
    }
    getItemType() {
        return this.store.getState().dragOperation.itemType;
    }
    getItem() {
        return this.store.getState().dragOperation.item;
    }
    getClientOffset() {
        return this.store.getState().dragOffset.clientOffset
    }
}
export default DragDropMonitorImpl