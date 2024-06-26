import { bubbleSort } from "@/algorithms/sorts/bubble";
// iterate through array
// comapre each element to next element
// if next is smaller, we swap
// check if sorted once done

import { useEffect, useState } from "react";

const defaultArray = [5, 3, 8, 4, 2, 1, 6, 9, 10, 7];
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
    <div className="flex flex-col justify-evenly h-full w-full items-center">
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-row gap-2 items-end">
          {array.map((num, i) => {
            return (
              <div
                key={i}
                className="mx-px"
                style={{
                  height: `${num * 20}px`,
                  width: "20px",
                  background: "green",
                }}
              ></div>
            );
          })}
        </div>
        <button onClick={() => setArray(defaultArray)} className="btn">
          Again
        </button>
      </div>
    </div>
  );
};

export default Bubble;
