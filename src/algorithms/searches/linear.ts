export const linearSearch = (arr: number[], numToFind: number): boolean[] => {
  let steps: boolean[] = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === numToFind) {
      steps.push(true);
      return steps;
    }
    steps.push(false);
  }
  return steps;
};
