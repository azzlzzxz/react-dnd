import HTML5BackendImpl from './HTML5BackendImpl';

export function HTML5Backend(manager) {
    return new HTML5BackendImpl(manager);
}