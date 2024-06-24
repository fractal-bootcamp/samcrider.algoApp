export type BinaryStep = {
  stepArray: number[];
  found: boolean;
};

export const binarySearch = (
  arr: number[],
  numToFind: number
): BinaryStep[] => {
  let modifiableArray = [...arr];
  const steps: BinaryStep[] = [];

  let startIdx = 0;
  let endIdx = modifiableArray.length - 1;

  // split array until impossible to split
  while (startIdx <= endIdx) {
    // get middle value, I've decided to take lower num if even length array
    const middleIdx = Math.floor((modifiableArray.length - 1) / 2);
    const middleValue = modifiableArray[middleIdx];

    if (middleValue === numToFind) {
      steps.push({ stepArray: modifiableArray, found: true });
      return steps;
    }

    // if number to find is in the left half
    if (numToFind < middleValue) {
      steps.push({ stepArray: modifiableArray, found: false });
      // remove all right half vals
      modifiableArray = modifiableArray.filter((_num, i) => i < middleIdx);
    } else {
      // if number to find is in the right half
      steps.push({ stepArray: modifiableArray, found: false });
      // remove all left half vals
      modifiableArray = modifiableArray.filter((_num, i) => i > middleIdx);
    }
  }
  steps.push({ stepArray: modifiableArray, found: false });
  return steps;
};
