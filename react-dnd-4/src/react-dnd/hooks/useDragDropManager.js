
import { DndContext } from '../core';
import { useContext } from 'react';
function useDragDropManager() {
    let value = useContext(DndContext);
    return value.dragDropManager;
}
export default useDragDropManager;