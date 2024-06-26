export const selectionSortWrapper = (array: number[]): number[][] => {
  let copyArray: number[] = [...array];
  let steps: number[][] = [];

  const selectionSort = (array: number[]) => {
    for (let i: number = 0; i < array.length - 1; i++) {
      let lowestVal: number = array[i];
      let lowestValIdx: number = i;

      for (let j: number = i; j < array.length; j++) {
        if (array[j] < lowestVal) {
          lowestVal = array[j];
          lowestValIdx = j;
        }
      }

      let temp: number = array[i];
      array[i] = array[lowestValIdx];
      array[lowestValIdx] = temp;
    }

    return array;
  };

  console.log("I haven't been sorted:", copyArray);
  const sortedArray = selectionSort(copyArray);
  console.log("I've been sorted:", sortedArray);

  return steps;
};
