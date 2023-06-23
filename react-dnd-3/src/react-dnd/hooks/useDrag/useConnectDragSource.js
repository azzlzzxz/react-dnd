/*
 * @Author: xinxu
 * @Date: 2023-06-23 09:41:15
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-23 09:43:19
 * @FilePath: /react-dnd/react-dnd-3/src/react-dnd/hooks/useDrag/useConnectDragSource.js
 */
import { useMemo } from "react";
function useConnectDragSource(connector) {
  return useMemo(() => connector.receiveDragSource(), [connector]);
}

export default useConnectDragSource;
