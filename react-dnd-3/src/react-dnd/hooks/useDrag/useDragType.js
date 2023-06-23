/*
 * @Author: xinxu
 * @Date: 2023-06-18 16:12:37
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-18 16:12:48
 * @FilePath: /react-dnd/react-dnd-2/src/react-dnd/hooks/useDrag/useDragType.js
 */
import { useMemo } from "react";
function useDragType(spec) {
  const itemType = spec.type;
  return useMemo(() => {
    return itemType;
  }, [itemType]);
}
export default useDragType;
