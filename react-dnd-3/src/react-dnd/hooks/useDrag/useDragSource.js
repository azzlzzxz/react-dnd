/*
 * @Author: xinxu
 * @Date: 2023-06-18 16:04:30
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-18 16:10:17
 * @FilePath: /react-dnd/react-dnd-2/src/react-dnd/hooks/useDrag/useDragSource.js
 */
import { useMemo, useEffect } from "react";
import DragSourceImpl from "./DragSourceImpl";
// 创建一个拖动源实例
function useDragSource(spec, monitor, connector) {
  const dragSource = useMemo(
    () => new DragSourceImpl(spec, monitor, connector),
    [spec, monitor, connector]
  );
  useEffect(() => {
    dragSource.spec = spec;
  }, [dragSource, spec]);

  return dragSource;
}

export default useDragSource;
