export type Step = {
  stepArray: number[];
  pivot: number;
};

export const quickSort = (array: number[]): Step[] => {
  let steps: Step[] = [];

  const quickSort = (array: number[]): number[] => {
    // base case
    if (array.length < 1) {
      return array;
    }
    // set pivot as last element in array
    const pivot = array[array.length - 1];
    // init left and right arrays
    const leftArr = [];
    const rightArr = [];

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < pivot) {
        leftArr.push(array[i]);
      } else {
        rightArr.push(array[i]);
      }
    }
    steps.push({
      stepArray: [...leftArr, pivot, ...rightArr],
      pivot: pivot,
    });
    // recursively call quicksort on both left and right arrays
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  };

  quickSort(array);

  console.log(steps);

  return steps;
};
