import { useMemo } from 'react';
import useDragDropManager from '../useDragDropManager';
import { DragSourceMonitorImpl } from '../../internals';
function useDragSourceMonitor() {
    const manager = useDragDropManager();
    return useMemo(() => new DragSourceMonitorImpl(manager), [manager]);
}
export default useDragSourceMonitor;