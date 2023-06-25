import useDragDropManager from '../useDragDropManager';
import useDragSource from './useDragSource';
import useDragType from './useDragType';
import { useLayoutEffect } from 'react';
import { registerSource } from '../../internals';
/**
 * 注册拖动源 创建一个拖动源，并且注册它到注册表里，并返回handlerId
 * @param {*} spec 
 * @param {*} monitor 
 * @param {*} connector 
 */
function useRegisteredDragSource(spec, monitor, connector) {
    const manager = useDragDropManager();
    const dragSource = useDragSource(spec, monitor, connector);
    console.log(dragSource);//拖动源的实例
    const itemType = useDragType(spec);
    console.log(itemType);//拖动源的类型
    useLayoutEffect(() => {
        //为什么要写在useLayoutEffect里，因为这个时候才有真实DOM，才可以进行绑定
        const handlerId = registerSource(itemType, dragSource, manager);
        monitor.receiveHandlerId(handlerId);
        connector.receiveHandlerId(handlerId);
        console.log(manager.globalMonitor.registry.dragSources);
        console.log(manager.globalMonitor.registry.types);
    }, [connector, dragSource, itemType, manager, monitor]);
}

export default useRegisteredDragSource;