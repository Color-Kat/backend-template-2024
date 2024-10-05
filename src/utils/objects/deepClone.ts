/**
 * Return deep clone of the object.
 *
 * @param obj
 */
export function deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}