
import { END_DRAG } from './types';
export default function createEndDrag(manager) {
    return function endDrag(sourceId) {
        return {
            type: END_DRAG
        }
    }
}