/**
 * Return true if the object is empty
 * @param obj
 */
export function isObjectEmpty(obj: Record<string, any>): boolean {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}