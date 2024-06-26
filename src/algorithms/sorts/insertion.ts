export const insertionSortWrapper = (unsortedArray: number[]): number[][] => {
  // copy array
  let copyArray = [...unsortedArray];
  let steps: number[][] = [];

  const insertionSort = (array: number[]): number[] => {
    // loop through array
    // start at one so we can access 0 in second loop
    for (let i = 1; i < array.length; i++) {
      // set current elm to be sorted
      let currElm: number = array[i];
      // init comparison index
      let compareIdx: number;

      // loop through all values before comparison index,
      // but only if they are greater than 0 and the current element
      for (
        compareIdx = i - 1;
        array[compareIdx] > currElm && compareIdx > -1;
        compareIdx--
      ) {
        // swap values
        array[compareIdx + 1] = array[compareIdx];
      }
      // insert the currElm one up from the comparison index
      array[compareIdx + 1] = currElm;
      steps.push([...array]);
    }

    // return sorted array
    return array;
  };

  console.log("I haven't been sorted:", copyArray);
  const sortedArray = insertionSort(copyArray);
  console.log("I've been sorted:", sortedArray);

  return steps;
};
