
import { HOVER } from './types';
export default function createHover(manager) {
    return function hover(targetId, payload) {
        //获取管理器中的全局监听器
        const monitor = manager.getGlobalMonitor();
        //获取注册表
        const registry = manager.getRegistry();
        //获取拖动源
        const target = registry.getTarget(targetId);
        //target.hover(monitor);
        queueMicrotask(target.hover.bind(target));
        return {
            type: HOVER,
            payload: {
                targetId,
                clientOffset: payload.clientOffset
            }
        }
    }
}