export const insertionSortWrapper = (unsortedArray: number[]): number[][] => {
  console.log("in wrapper", unsortedArray);
  let steps: number[][] = [];

  const insertionSort = (array: number[]): number[] => {
    // copy array
    console.log("right before copying array", array);
    let arrayBeingSorted: number[] = array;
    console.log(arrayBeingSorted);

    // loop through array
    // start at one so we can access 0 in second loop
    for (let i = 1; i < arrayBeingSorted.length; i++) {
      // set current elm to be sorted
      let currElm: number = arrayBeingSorted[i];
      // init comparison index
      let compareIdx: number;

      // loop through all values before comparison index,
      // but only if they are greater than 0 and the current element
      for (
        compareIdx = i - 1;
        arrayBeingSorted[compareIdx] > currElm && compareIdx > -1;
        compareIdx--
      ) {
        // swap values
        arrayBeingSorted[compareIdx + 1] = arrayBeingSorted[compareIdx];
        steps.push(arrayBeingSorted);
      }
      // insert the currElm one up from the comparison index
      arrayBeingSorted[compareIdx + 1] = currElm;
    }

    // return sorted array
    return arrayBeingSorted;
  };

  console.log("right before insertion sort starts", unsortedArray);
  insertionSort(unsortedArray);

  return steps;
};
