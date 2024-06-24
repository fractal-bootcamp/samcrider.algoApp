import { binarySearch, BinaryStep } from "@/algorithms/searches/binary";
import React, { useEffect, useState } from "react";

const defaultData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const defaultSteps: BinaryStep[] = [
  { stepArray: defaultData, found: false },
  { stepArray: defaultData, found: false },
  { stepArray: defaultData, found: false },
  { stepArray: defaultData, found: false },
  { stepArray: defaultData, found: false },
  { stepArray: defaultData, found: false },
  { stepArray: defaultData, found: false },
  { stepArray: defaultData, found: false },
  { stepArray: defaultData, found: false },
  { stepArray: defaultData, found: false },
];

const Binary = () => {
  const [steps, setSteps] = useState<BinaryStep[]>(defaultSteps);
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const steps = binarySearch(defaultData, 9);
    setSteps(steps);
  }, []);

  useEffect(() => {
    // count one past the final element for rendering purposes
    if (counter !== steps.length) {
      setTimeout(() => setCounter(counter + 1), 1000);
    }
  }, [counter]);

  // NOTE: messy code incoming! I needed the red blocks to render in a specific order
  // so I had to count one past the final element of the steps array and then render conditionally
  // based on that.
  return (
    <div className="flex flex-col justify-evenly h-full items-center">
      <div className="flex flex-row">
        {defaultData.map((num, i) => {
          // if we are on final count and num exists and is the num we are trying to find
          if (
            counter === steps.length &&
            steps[counter - 1].found &&
            num === steps[counter - 1].stepArray[0]
          ) {
            return (
              <span key={i} className="m-3 p-1 bg-green-500">
                {num}
              </span>
            );
          }
          // if we are on final count and num exists but isn't the num we are trying to find
          if (
            counter === steps.length &&
            steps[counter - 1].found &&
            num === steps[counter - 1].stepArray[1]
          ) {
            return (
              <span key={i} className="m-3 p-1 bg-red-500">
                {num}
              </span>
            );
          }
          // if we are not at final count and num isn't in array - render as red
          if (
            counter !== steps.length &&
            !steps[counter].stepArray.includes(num)
          ) {
            return (
              <span key={i} className="m-3 p-1 bg-red-500">
                {num}
              </span>
            );
          }
          // if we are on final count and num isn't in array - render as red
          if (
            counter === steps.length &&
            !steps[counter - 1].stepArray.includes(num)
          ) {
            return (
              <span key={i} className="m-3 p-1 bg-red-500">
                {num}
              </span>
            );
          }
          // default
          return (
            <span key={i} className="m-3 p-1">
              {num}
            </span>
          );
        })}
      </div>
      <div className="flex flex-row gap-6">
        <div className="flex flex-col items-center gap-1">
          <div className="border-b-2 border-black">Number to Find</div>
          <div className="text-xl font-bold">9</div>
        </div>
        <button className="btn" onClick={() => setCounter(0)}>
          Again
        </button>
      </div>
    </div>
  );
};

export default Binary;
