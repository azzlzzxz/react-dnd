
import { useMemo } from 'react';
function useConnectDragSource(connector) {
    return useMemo(() => connector.receiveDragSource(), [connector]);
}

export default useConnectDragSource;