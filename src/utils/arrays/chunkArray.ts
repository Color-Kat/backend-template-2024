/**
 * Splits an array into chunks of specified size.
 *
 * @template T - The type of the array elements.
 * @param {T[]} arr - The array to split into chunks.
 * @param {number} size - The size of each chunk.
 * @returns {T[][]} An array of chunks.
 */
export function chunkArray<T>(arr: T[], size: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

// Example Usage
// const data = [1, 2, 3, 4, 5, 6, 7];
// console.log(chunkArray(data, 3)); // Output: [[1, 2, 3], [4, 5, 6], [7]]
