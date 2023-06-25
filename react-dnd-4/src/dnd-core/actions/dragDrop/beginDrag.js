
import { BEGIN_DRAG } from './types';
export default function createBeginDrag(manager) {
    return function beginDrag(sourceId) {
        //获取管理器中的全局监听器
        const monitor = manager.getGlobalMonitor();
        //获取注册表
        const registry = manager.getRegistry();
        //获取拖动源
        const source = registry.getSource(sourceId);
        //调用useDrag的spec.item方法，返回当前正在被 拖动的
        const item = source.beginDrag(monitor, sourceId);
        const itemType = registry.getSourceType(sourceId);
        return {
            type: BEGIN_DRAG,
            payload: {
                itemType,
                item,//{id,index}
                sourceId
            }
        }
    }
}