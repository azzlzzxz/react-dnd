

class DropTargetMonitorImpl {
    internalMonitor
    handlerId
    constructor(manager) {
        this.internalMonitor = manager.getGlobalMonitor()
    }
    receiveHandlerId(handlerId) {
        this.handlerId = handlerId;
    }
    subscribeStateChange(listener) {
        return this.internalMonitor.subscribeStateChange(listener);
    }
    getItemType() {
        return this.internalMonitor.getItemType();
    }
    getItem() {
        return this.internalMonitor.getItem();
    }
    getClientOffset() {
        return this.internalMonitor.getClientOffset();
    }
}
export default DropTargetMonitorImpl;
/**
 * 全局
 * 某个源或目标的
 * 某个源的监听 器会有一个内部指针指向全局监听器
 */