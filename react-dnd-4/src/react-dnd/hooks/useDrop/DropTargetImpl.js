class DragSourceImpl {
    spec
    monitor
    connector
    constructor(spec, monitor, connector) {
        this.spec = spec;
        this.monitor = monitor;
        this.connector = connector;
    }
    hover() {
        if (this.spec.hover) {
            this.spec.hover(this.monitor.getItem(), this.monitor);
        }
    }
}
export default DragSourceImpl;