import DndContext from './DndContext';
import { createDragDropManager } from '../../dnd-core';
function DndProvider({ backend, children }) {
    let value = { dragDropManager: createDragDropManager(backend) };
    return (
        <DndContext.Provider value={value}>
            {children}
        </DndContext.Provider>
    )
}
export default DndProvider;