export const bubbleSort = (
  arr: number[]
): { arr: number[]; swapped: boolean } => {
  const newArr = [...arr];
  let swapped = false;

  // iterate through array
  for (let i = 0; i < arr.length - 1; i++) {
    const elm1 = newArr[i];
    const elm2 = newArr[i + 1];

    // if a swap happens, we know that the array is not sorted
    if (elm2 < elm1) {
      // need to indicate that there was a swap
      newArr[i] = elm2;
      newArr[i + 1] = elm1;
      swapped = true;
    }
  }

  return { arr: newArr, swapped };
};
