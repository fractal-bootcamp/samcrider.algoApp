import { insertionSortWrapper } from "@/algorithms/sorts/insertion";
import React, { useEffect, useState } from "react";

// constants
let unsorted: number[] = [10, 4, 7, 2, 3, 9, 8, 6, 1, 5];
const defaultSteps = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const Insertion = () => {
  const [steps, setSteps] = useState<number[][]>(defaultSteps);
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const steps = insertionSortWrapper(unsorted);
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
          {steps[counter].map((num, i) => {
            if (counter === steps.length - 1) {
              return (
                <div
                  className="bg-green-500 mx-px"
                  style={{ height: `${num * 20}px`, width: "20px" }}
                  key={i}
                ></div>
              );
            }
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

export default Insertion;
