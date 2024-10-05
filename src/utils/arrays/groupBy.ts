/**
 * Groups elements of an array by a given key.
 *
 * @template T - The type of the array elements.
 * @template K - The key to group by.
 * @param {T[]} arr - The array to group.
 * @param {K} key - The key to group by.
 * @returns {Record<string, T[]>} A record object with keys representing the group values.
 */
export function groupBy<T extends Record<string, any>, K extends keyof T>(arr: T[], key: K): Record<string, T[]> {
    return arr.reduce((result, item) => {
        const groupKey = item[key] as unknown as string;
        (result[groupKey] = result[groupKey] || []).push(item);
        return result;
    }, {} as Record<string, T[]>);
}

// Example Usage
// const users = [
//     { id: 1, role: 'admin' },
//     { id: 2, role: 'user' },
//     { id: 3, role: 'admin' },
// ];
// console.log(groupBy(users, 'role'));
// // Output: { admin: [{ id: 1, role: 'admin' }, { id: 3, role: 'admin' }], user: [{ id: 2, role: 'user' }] }
