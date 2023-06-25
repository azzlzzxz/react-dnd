let nextUniqueId = 0;
function getNextUniqueId() {
    return nextUniqueId++;
}
export default getNextUniqueId;