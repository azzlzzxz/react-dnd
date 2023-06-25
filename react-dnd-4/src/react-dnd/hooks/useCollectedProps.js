import { useState, useLayoutEffect, useCallback } from 'react';
import equal from 'fast-deep-equal';
/**
 * 从监听器中收集属性并返回用来渲染组件
 * @param {*} collect 
 * @param {*} monitor  数据从监听器里收集到了，监听里的数据来自于redux store
 * @param {*} connector 
 */
function useCollectedProps(collect, monitor, connector) {
    const [collectedProps, setCollectedProps] = useState(() => collect(monitor));
    /**
     * 1.当仓库的状态变化后要重新计算属性并重新渲染组件
     */
    const updateCollected = useCallback(() => {
        //当redux仓库 中数据发生改变，monitor数据也会改变，然后会重新收集
        const nextValue = collect(monitor);
        //如果新老属性相同，则不需要更新
        if (!equal(collectedProps, nextValue)) {
            setCollectedProps(nextValue);
        }
        //传递useState,组件会重新刷新
    }, [collect, collectedProps, monitor]);
    useLayoutEffect(() => {
        return monitor.subscribeStateChange(updateCollected);
    }, [monitor, updateCollected]);
    return collectedProps;
}

export default useCollectedProps;