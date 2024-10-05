import { sleep } from "@/utils/sleep.ts";

/**
 * Creates a throttled function that only invokes `func` at most once per every `limit` milliseconds.
 *
 * @template T - The type of the function.
 * @param {T} func - The function to throttle.
 * @param {number} limit - The time in milliseconds to wait before allowing the next function call.
 * @returns {(...args: Parameters<T>) => void} A throttled function.
 */
export function throttle<T extends (...args: any[]) => void>(func: T, limit: number): (...args: Parameters<T>) => void {
    let lastFunc: ReturnType<typeof setTimeout>;
    let lastRan: number;

    return function (...args: Parameters<T>) {
        if (!lastRan) {
            func(...args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if ((Date.now() - lastRan) >= limit) {
                    func(...args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

// const showMessage = throttle(() => {
//     console.log('hello')
// }, 1000);
//
// showMessage();
// showMessage();
// showMessage();
// showMessage();
// sleep(1100)
// showMessage();
// sleep(1100)
// showMessage();
