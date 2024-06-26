const merge = (
  left: ReturnType<typeof mergeSort>,
  right: ReturnType<typeof mergeSort>
): number[] => {
  let resultArr: number[] = [];
  let leftIdx: number = 0;
  let rightIdx: number = 0;

  // loop through arrays
  while (leftIdx < left.length && rightIdx < right.length) {
    // if left val < right val
    if (left[leftIdx] < right[rightIdx]) {
      // push it to the result array
      resultArr.push(left[leftIdx]);
      // go to next val in left array
      leftIdx++;
    } else {
      // else push the right array val to the results array
      resultArr.push(right[rightIdx]);
      // then go to the next val in right array
      rightIdx++;
    }
  }

  // return result array and add on any vals left in the left/right arrays
  return resultArr.concat(left.slice(leftIdx), right.slice(rightIdx));
};

export const mergeSort = (array: number[]): number[] => {
  // base case
  if (array.length === 1) {
    return array;
  }

  // divide up the array
  const middleIdx: number = Math.floor(array.length / 2);
  const leftArray: number[] = array.slice(0, middleIdx);
  const rightArray: number[] = array.slice(middleIdx);

  // recursively divide up the new arrays and sort them
  return merge(mergeSort(leftArray), mergeSort(rightArray));
};
