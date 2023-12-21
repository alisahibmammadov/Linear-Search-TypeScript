function linear<T>(array: T[], target: T): number {
  for (let i = 0; i < array.length; i++) {
    if (target === array[i]) {
      return i;
    }
  }
  return -1;
}

let array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target: number = 22;
let targetElementIndex: number = linear(array, target);

if (targetElementIndex !== -1) {
  console.log("Index of target element found", targetElementIndex);
} else {
  console.log(
    "The given element was not found in the array",
    targetElementIndex
  );
}
