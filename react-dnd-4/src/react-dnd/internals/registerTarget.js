

function registerTarget(type, dragSource, manager) {
    const registry = manager.getRegistry();
    const handlerId = registry.addTarget(type, dragSource);
    return handlerId;
}
export default registerTarget;