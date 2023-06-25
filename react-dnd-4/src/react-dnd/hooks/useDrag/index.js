import useDragSourceMonitor from './useDragSourceMonitor';
import useDragSourceConnector from './useDragSourceConnector';
import useRegisteredDragSource from './useRegisteredDragSource';
import useConnectDragSource from './useConnectDragSource';
import useCollectedProps from '../useCollectedProps';
/**
 * useDragSource hook
 * @param sourceSpec  拖动源的规范对象
 */
function useDrag(spec) {
    //创建监听器
    const monitor = useDragSourceMonitor();
    //创建连接 
    const connector = useDragSourceConnector();
    //向DND系统中注册拖动源实例 1.创建拖动源实例 2 注册拖动源实例到注册表中
    useRegisteredDragSource(spec, monitor, connector);
    return [
        useCollectedProps(spec.collect, monitor, connector)
        , useConnectDragSource(connector)];
}
export default useDrag;

/**
 * 在React Dnd应用中 monitor有两个级别
 * 1.全局monitor 只有一份
 * 2.拖动源或放置目标的monitor  每个源或目标都有一份
 */