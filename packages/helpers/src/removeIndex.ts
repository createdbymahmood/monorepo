/**
 * Given an array, it returns a new array that does not contain the item at the given index.
 * @param array - The array to operate on
 * @param index - The index of the element to remove
 */
export function removeIndex<T>(array: T[], index: number): T[] {
    return array.filter((_: T, i: number) => index !== i);
}
