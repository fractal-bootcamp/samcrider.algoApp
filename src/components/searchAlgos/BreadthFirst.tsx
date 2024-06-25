import { breadthFirstSearch } from "@/algorithms/searches/breadthFirst";
import React, { useEffect, useState } from "react";

// define types
export type ReturnOfCreateNode = {
  value: number;
  left?: ReturnOfCreateNode;
  right?: ReturnOfCreateNode;
};

export type BSResult = {
  value: number | undefined;
  found: boolean;
};

// define constant for display
const dataTree = [1, 2, 4, 5, 3, 6, 7];

const defaultBSResult = [
  {
    value: 0,
    found: false,
  },
  {
    value: 1,
    found: false,
  },
  {
    value: 2,
    found: false,
  },
  {
    value: 3,
    found: false,
  },
  {
    value: 4,
    found: false,
  },
  {
    value: 5,
    found: false,
  },
  {
    value: 6,
    found: false,
  },
];

// build tree function
function createNode(
  value: number,
  left?: ReturnOfCreateNode,
  right?: ReturnOfCreateNode
) {
  return { value, left, right };
}

// constant for function
const tree = createNode(
  1,
  createNode(2, createNode(4), createNode(5)),
  createNode(3, createNode(6), createNode(7))
);

const BreadthFirst = () => {
  const [counter, setCounter] = useState<number>(0);
  const [bsResult, setBSResult] = useState<BSResult[]>(defaultBSResult);

  useEffect(() => {
    const result: BSResult[] = breadthFirstSearch(tree, 6);

    setBSResult(result);
  }, []);

  useEffect(() => {
    if (counter < bsResult?.length - 1) {
      setTimeout(() => setCounter(counter + 1), 1000);
    }
  }, [counter]);

  return (
    <div className="flex flex-col items-center justify-evenly w-full h-full">
      <div className="flex flex-col items-center text-lg">
        {bsResult[counter].value === dataTree[0] ? (
          <div className="font-bold border-solid border-red-500 border-2">
            {dataTree[0]}
          </div>
        ) : (
          dataTree[0]
        )}
        <div className="flex flex-row gap-6">
          <div>/</div>
          <div>\</div>
        </div>
        <div className="flex flex-row gap-10">
          <div>
            {bsResult[counter].value === dataTree[1] ? (
              <div className="font-bold border-solid border-red-500 border-2">
                {dataTree[1]}
              </div>
            ) : (
              dataTree[1]
            )}
          </div>
          <div>
            {bsResult[counter].value === dataTree[4] ? (
              <div className="font-bold border-solid border-red-500 border-2">
                {dataTree[4]}
              </div>
            ) : (
              dataTree[4]
            )}
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <div>/</div>
          <div>\</div>
          <div>/</div>
          <div>\</div>
        </div>
        <div className="flex flex-row gap-5">
          <div>
            {bsResult[counter].value === dataTree[2] ? (
              <div className="font-bold border-solid border-red-500 border-2">
                {dataTree[2]}
              </div>
            ) : (
              dataTree[2]
            )}
          </div>
          <div>
            {bsResult[counter].value === dataTree[3] ? (
              <div className="font-bold border-solid border-red-500 border-2">
                {dataTree[3]}
              </div>
            ) : (
              dataTree[3]
            )}
          </div>
          <div>
            {bsResult[counter].value === dataTree[5] ? (
              <div className="font-bold border-solid border-green-500 border-2">
                {dataTree[5]}
              </div>
            ) : (
              dataTree[5]
            )}
          </div>
          <div>
            {bsResult[counter].value === dataTree[6] ? (
              <div className="font-bold border-solid border-red-500 border-2">
                {dataTree[6]}
              </div>
            ) : (
              dataTree[6]
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-6">
        <div className="flex flex-col items-center gap-1">
          <div className="border-b-2 border-black">Number to Find</div>
          <div className="text-xl font-bold">6</div>
        </div>
        <button className="btn" onClick={() => setCounter(0)}>
          Again
        </button>
      </div>
    </div>
  );
};

export default BreadthFirst;
