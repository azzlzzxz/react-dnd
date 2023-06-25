
import createBeginDrag from './beginDrag';
import createEndDrag from './endDrag';
import createHover from './hover';
function createDragDropActions(manager) {
    return {
        beginDrag: createBeginDrag(manager),
        endDrag: createEndDrag(manager),
        hover: createHover(manager)
    }
}
export default createDragDropActions;