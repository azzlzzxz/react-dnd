
import { useMemo } from 'react';
function useDragType(spec) {
    return useMemo(() => spec.type, [spec]);;
}
export default useDragType;