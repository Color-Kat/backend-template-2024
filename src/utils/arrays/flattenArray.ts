/**
 * Flattens a nested array into a single-level array.
 *
 * @template T - The type of the array elements.
 * @param {T[]} arr - The array to flatten.
 * @returns {T[]} A flattened array.
 */
export function flattenArray<T>(arr: T[]): T[] {
    return arr.reduce((flat: T[], toFlatten: any) => {
        return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
    }, []);
}

// Example Usage
// const nestedArray = [1, [2, 3], [4, [5, 6]]];
// console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]