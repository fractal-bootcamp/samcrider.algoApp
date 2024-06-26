import React from "react";

let grid = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];

const Djikstra = () => {
  return (
    <div className="flex flex-col justify-evenly h-full w-full items-center">
      <div className="flex flex-col items-center gap-6">
        <div className="grid grid-cols-6">
          {grid.map((num, i) => {
            if (num === 8 || num === 23) {
              return (
                <div className="bg-green-500 p-6 flex justify-center" key={i}>
                  {num}
                </div>
              );
            }
            return (
              <div className="bg-red-500 p-6 flex justify-center" key={i}>
                {num}
              </div>
            );
          })}
        </div>
        <div className="flex flex-row items-center gap-6">
          <div className="flex flex-col items-center gap-1">
            <div className="border-b-2 border-black">Find Shortest Path</div>
            <div className="text-xl font-bold">8 {"->"} 23</div>
          </div>
          <button
            className="btn"
            // onClick={() => setCounter(0)}
          >
            Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Djikstra;
