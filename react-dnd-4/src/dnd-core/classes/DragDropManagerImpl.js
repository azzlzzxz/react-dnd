
import { createDragDropActions } from '../actions/dragDrop';
import { bindActionCreators } from 'redux';
class DragDropManagerImpl {
    store
    backend
    globalMonitor
    constructor(store, globalMonitor) {
        this.store = store;
        this.globalMonitor = globalMonitor;
    }
    receiveBackend(backend) {
        this.backend = backend;
        this.backend.setup();
    }
    getBackend() {
        return this.backend;
    }
    getGlobalMonitor() {
        return this.globalMonitor;
    }
    getRegistry() {
        return this.globalMonitor.registry;//管理 器里可以用监听器获取 注册表类的实例
    }
    getActions() {
        const actions = createDragDropActions(this);
        return bindActionCreators(actions, this.store.dispatch);
    }
}
export default DragDropManagerImpl;