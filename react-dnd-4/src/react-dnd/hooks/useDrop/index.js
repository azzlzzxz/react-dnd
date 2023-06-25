import useDropTargetMonitor from './useDropTargetMonitor';
import useDropTargetConnector from './useDropTargetConnector';
import useRegisteredDropTarget from './useRegisteredDropTarget';
import useConnectDropTarget from './useConnectDropTarget';
import useCollectedProps from '../useCollectedProps';
/**
 * useDropSource hook
 * @param sourceSpec  拖动源的规范对象
 */
function useDrop(spec) {
    //创建监听器
    const monitor = useDropTargetMonitor();
    //创建连接 
    const connector = useDropTargetConnector();
    //向DND系统中注册拖动源实例 1.创建拖动源实例 2 注册拖动源实例到注册表中
    useRegisteredDropTarget(spec, monitor, connector);
    return [
        useCollectedProps(spec.collect, monitor, connector)
        , useConnectDropTarget(connector)];
}
export default useDrop;

/**
 * 在React Dnd应用中 monitor有两个级别
 * 1.全局monitor 只有一份
 * 2.拖动源或放置目标的monitor  每个源或目标都有一份
 */