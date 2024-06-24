import { bubbleSort } from "@/algorithms/sorts/bubble";
// iterate through array
// comapre each element to next element
// if next is smaller, we swap
// check if sorted once done

import { useEffect, useState } from "react";

const defaultArray = [5, 3, 8, 4, 2];
// do it again if not sorted
const Bubble = () => {
  const [array, setArray] = useState<number[]>(defaultArray);

  useEffect(() => {
    const { arr, swapped } = bubbleSort(array);
    if (swapped) {
      setTimeout(() => setArray(arr), 1000);
    }
  }, [array]);

  return (
    <div className="flex flex-col items-start gap-4 p-4">
      <div className="text-center w-full">gonna see some algos</div>
      <button onClick={() => setArray(defaultArray)}>reset bubble sort</button>
      <div className="flex">
        {defaultArray.map((num, i) => {
          return (
            <div
              key={i}
              className="mx-px"
              style={{
                height: `${num * 10}px`,
                width: "10px",
                background: "blue",
              }}
            ></div>
          );
        })}
      </div>
      <div className="flex">
        {array.map((num, i) => {
          return (
            <div
              key={i}
              className="mx-px"
              style={{
                height: `${num * 10}px`,
                width: "10px",
                background: "green",
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Bubble;
