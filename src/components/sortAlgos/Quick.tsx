import { quickSort, Step } from "@/algorithms/sorts/quick";
import React, { useEffect, useState } from "react";

// constants
const unsorted: number[] = [10, 4, 7, 2, 3, 9, 8, 6, 1, 5];
const sorted: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const defaultSteps: Step[] = [
  { stepArray: [0], pivot: 0 },
  { stepArray: [1], pivot: 1 },
  { stepArray: [2], pivot: 2 },
  { stepArray: [3], pivot: 3 },
  { stepArray: [4], pivot: 4 },
  { stepArray: [5], pivot: 5 },
  { stepArray: [6], pivot: 6 },
  { stepArray: [7], pivot: 7 },
  { stepArray: [8], pivot: 8 },
  { stepArray: [9], pivot: 9 },
];

const Quick = () => {
  const [steps, setSteps] = useState<Step[]>(defaultSteps);
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const steps = quickSort(unsorted);
    setSteps(steps);
  }, []);

  useEffect(() => {
    if (counter < steps.length - 1) {
      setTimeout(() => setCounter(counter + 1), 1000);
    }
  }, [counter]);

  return (
    <div className="flex flex-col justify-evenly h-full w-full items-center">
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-row gap-2 items-end">
          {unsorted.map((num, i) => {
            return (
              <div
                className="bg-red-500 mx-px"
                style={{ height: `${num * 20}px`, width: "20px" }}
                key={i}
              ></div>
            );
          })}
        </div>
        <button className="btn" onClick={() => setCounter(0)}>
          Again
        </button>
      </div>
    </div>
  );
};

export default Quick;
