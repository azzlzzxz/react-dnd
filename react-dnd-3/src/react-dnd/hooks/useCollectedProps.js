/*
 * @Author: xinxu
 * @Date: 2023-06-23 09:59:35
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-23 11:14:25
 * @FilePath: /react-dnd/react-dnd-3/src/react-dnd/hooks/useCollectedProps.js
 */
import { useState, useLayoutEffect, useCallback } from "react";
import equal from "fast-deep-equal";
/**
 * 从监听器中收集属性，并返回用来渲染组件
 * @param {*} collect
 * @param {*} monitor 数据从监听器里收集到，监听的数据来自store
 * @param {*} connector
 * @returns
 */
function useCollectedProps(collect, monitor, connector) {
  const [collectedProps, setCollectedProps] = useState(() => collect(monitor));

  const updateCollected = useCallback(() => {
    // 当store中数据变化后，monitor数据发生变化，重新计算属性并重新渲染组件
    const nextValue = collect(monitor);
    if (!equal(collectedProps, nextValue)) {
      setCollectedProps(nextValue);
    }
  }, [monitor, collect, collectedProps]);

  // 当状态变化后要重新计算属性并重新渲染组件
  useLayoutEffect(() => {
    return monitor.subscribeStateChange(updateCollected);
  }, [monitor, updateCollected]);

  return collectedProps;
}

export default useCollectedProps;
