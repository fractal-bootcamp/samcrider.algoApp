import { mergeSort } from "@/algorithms/sorts/merge";
import React, { useEffect, useState } from "react";

// constants
const unsorted: number[] = [10, 4, 7, 2, 3, 9, 8, 6, 1, 5];

const Merge = () => {
  const [result, setResult] = useState<number[]>(unsorted);
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const sortedArray = mergeSort(unsorted);
    console.log("merge sort, unsorted: ", unsorted);
    console.log("merge sort, sorted: ", sortedArray);
    setResult(sortedArray);
  }, []);

  useEffect(() => {
    if (counter < result.length - 1) {
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
                className="bg-red-500"
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

export default Merge;
