import { useMemo } from 'react';
import useDragDropManager from '../useDragDropManager';
import { DropTargetMonitorImpl } from '../../internals';
function useDropTargetMonitor() {
    const manager = useDragDropManager();
    return useMemo(() => new DropTargetMonitorImpl(manager), [manager]);
}
export default useDropTargetMonitor;