import useDragDropManager from '../useDragDropManager';
import useDropTarget from './useDropTarget';
import { useLayoutEffect } from 'react';
import { registerTarget } from '../../internals';
/**
 * 注册拖动源 创建一个拖动源，并且注册它到注册表里，并返回handlerId
 * @param {*} spec 
 * @param {*} monitor 
 * @param {*} connector 
 */
function useRegisteredDragSource(spec, monitor, connector) {
    const manager = useDragDropManager();
    const dropTarget = useDropTarget(spec, monitor, connector);
    const itemType = spec.type;
    useLayoutEffect(() => {
        //为什么要写在useLayoutEffect里，因为这个时候才有真实DOM，才可以进行绑定
        const handlerId = registerTarget(itemType, dropTarget, manager);
        monitor.receiveHandlerId(handlerId);
        connector.receiveHandlerId(handlerId);
    }, [connector, dropTarget, itemType, manager, monitor]);
}

export default useRegisteredDragSource;