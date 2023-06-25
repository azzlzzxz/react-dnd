class DragSourceImpl {
    spec
    monitor
    connector
    constructor(spec, monitor, connector) {
        this.spec = spec;
        this.monitor = monitor;
        this.connector = connector;
    }
    beginDrag(monitor) {
        return this.spec.item();
    }
}
export default DragSourceImpl;