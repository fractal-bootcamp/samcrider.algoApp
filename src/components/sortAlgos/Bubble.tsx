import { bubbleSort } from "@/algorithms/sorts/bubble";
// iterate through array
// comapre each element to next element
// if next is smaller, we swap
// check if sorted once done

import { useEffect, useState } from "react";

const defaultArray = [10, 4, 7, 2, 3, 9, 8, 6, 1, 5];
// do it again if not sorted
const Bubble = () => {
  const [array, setArray] = useState<number[]>(defaultArray);
  const [final, setFinal] = useState<boolean>(false);

  useEffect(() => {
    const { arr, swapped } = bubbleSort(array);
    if (swapped) {
      setTimeout(() => setArray(arr), 1000);
      return;
    }
    setFinal(true);
  }, [array]);

  return (
    <div className="flex flex-col justify-evenly h-full w-full items-center">
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-row gap-2 items-end">
          {array.map((num, i) => {
            if (final) {
              return (
                <div
                  key={i}
                  className="mx-px bg-green-500"
                  style={{
                    height: `${num * 20}px`,
                    width: "20px",
                  }}
                ></div>
              );
            }
            return (
              <div
                key={i}
                className="mx-px bg-red-500"
                style={{
                  height: `${num * 20}px`,
                  width: "20px",
                }}
              ></div>
            );
          })}
        </div>
        <button
          onClick={() => {
            setArray(defaultArray);
            setFinal(false);
          }}
          className="btn"
        >
          Again
        </button>
      </div>
    </div>
  );
};

export default Bubble;
