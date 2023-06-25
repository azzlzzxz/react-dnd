

function registerSource(type, dragSource, manager) {
    const registry = manager.getRegistry();
    const handlerId = registry.addSource(type, dragSource);
    return handlerId;
}
export default registerSource;