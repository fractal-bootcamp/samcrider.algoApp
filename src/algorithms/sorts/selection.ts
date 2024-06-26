export const selectionSortWrapper = (array: number[]): number[][] => {
  // copy array
  let copyArray: number[] = [...array];
  // init steps
  let steps: number[][] = [];

  const selectionSort = (array: number[]) => {
    // loop through array
    for (let i: number = 0; i < array.length - 1; i++) {
      // set current val and index
      let lowestVal: number = array[i];
      let lowestValIdx: number = i;

      // loop through array starting at lowest val index
      for (let j: number = i; j < array.length; j++) {
        // if current val is less than lowest val, set lowest val to current val
        if (array[j] < lowestVal) {
          lowestVal = array[j];
          lowestValIdx = j;
        }
      }

      // once j loop is done, swap lowest val with val at lowest val index,
      // which is no longer the same index that was initially set
      let temp: number = array[i];
      array[i] = array[lowestValIdx];
      array[lowestValIdx] = temp;
      steps.push([...array]);
    }

    return array;
  };

  console.log("I haven't been sorted:", copyArray);
  const sortedArray = selectionSort(copyArray);
  console.log("I've been sorted:", sortedArray);

  return steps;
};
