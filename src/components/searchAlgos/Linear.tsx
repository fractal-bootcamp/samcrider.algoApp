import { linearSearch } from "@/algorithms/searches/linear";
import React, { useEffect, useState } from "react";

const defaultData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const defaultSteps = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];

const Linear = () => {
  const [steps, setSteps] = useState<boolean[]>(defaultSteps);
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const steps = linearSearch(defaultData, 7);

    setSteps(steps);
  }, []);

  useEffect(() => {
    if (counter !== steps.length - 1) {
      setTimeout(() => setCounter(counter + 1), 1000);
    }
  }, [counter]);

  return (
    <div className="flex flex-col justify-evenly h-full items-center">
      <div className="flex flex-row">
        {defaultData.map((num, i) => {
          if (steps[i] === true && counter === i) {
            return (
              <span
                key={i}
                className="m-3 border-2 font-bold border-solid border-green-500 p-1"
              >
                <div>{num}</div>
                <div>=</div>
                <div>7</div>
              </span>
            );
          }
          if (i === counter) {
            return (
              <span
                key={i}
                className="m-3 border-2 font-bold border-solid border-red-500 p-1"
              >
                <div>{num}</div>
                <div>=</div>
                <div>7</div>
              </span>
            );
          }
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
          <div className="text-xl font-bold">7</div>
        </div>
        <button className="btn" onClick={() => setCounter(0)}>
          Again
        </button>
      </div>
    </div>
  );
};

export default Linear;
