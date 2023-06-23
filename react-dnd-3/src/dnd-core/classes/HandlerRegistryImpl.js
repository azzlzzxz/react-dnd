/*
 * @Author: xinxu
 * @Date: 2023-06-18 15:30:11
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-18 16:46:06
 * @FilePath: /react-dnd/react-dnd-2/src/dnd-core/classes/HandlerRegistryImpl.js
 */
import { HandlerRole } from "../interfaces";
import { getNextUniqueId } from "../utils";
import { addSource } from "../actions/registry";

class HandlerRegistryImpl {
  store;
  types = new Map(); // {handlerId: type}
  draSource = new Map(); //{handlerId: draSource}
  constructor(store) {
    this.store = store;
  }
  addSource(type, draSource) {
    const handlerId = this.addHandler(HandlerRole.SOURCE, type, draSource);
    this.store.dispatch(addSource(handlerId));
    return handlerId;
  }
  addHandler(role, type, handler) {
    const handlerId = getNextHandler(role);
    this.types.set(handlerId, type); // S0:CARD
    if (role === HandlerRole.SOURCE) {
      this.draSource.set(handlerId, handler);
    }
    return handlerId;
  }
}

function getNextHandler(role) {
  const id = getNextUniqueId();
  switch (role) {
    case HandlerRole.SOURCE:
      return `S${id}`;
    case HandlerRole.TARGET:
      return `T${id}`;
    default:
      throw new Error("Unknown Handler Role");
  }
}

export default HandlerRegistryImpl;
