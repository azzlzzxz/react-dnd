/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useEffect } from 'react';
import DropTargetImpl from './DropTargetImpl';
/**
 * 创建一个拖动源的实例
 * @param {*} spec 
 * @param {*} monitor 
 * @param {*} connector 
 */
function useDragSource(spec, monitor, connector) {
    const dropTarget = useMemo(() => new DropTargetImpl(spec, monitor, connector), [monitor, connector]);
    useEffect(() => dropTarget.spec = spec, [spec]);//TODO
    return dropTarget;
}
export default useDragSource;