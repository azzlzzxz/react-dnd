import { useMemo } from 'react';
import useDragDropManager from '../useDragDropManager';
import { SourceConnector } from '../../internals';
function useDragSourceConnector() {
    //先获取管理器manager
    const manager = useDragDropManager();
    const connector = useMemo(() => new SourceConnector(manager.getBackend()), [manager]);
    return connector;
    //创建一个拖动源的连接器

}
export default useDragSourceConnector;