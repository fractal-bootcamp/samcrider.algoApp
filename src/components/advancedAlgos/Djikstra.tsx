import React from "react";
import { GraphCanvas } from "reagraph";

const distances = [
  { d: 1, nodes: ["A", "B"] },
  { d: 2, nodes: ["A", "G"] },
];

const getWeights = (letter: string, d: typeof distances) => {
  // get all distances where distance.nodes includes h
};
const getNode = (letter: string) => {
  return { data: getWeights(letter, distances), node: letter };
};

const graph = [
  getNode("A"),
  getNode("B"),
  getNode("C"),
  getNode("D"),
  getNode("E"),
];

const Djikstra = () => {
  return (
    <div className="flex flex-col justify-evenly h-full w-full items-center">
      <div className="flex flex-col items-center gap-6">
        <div
          style={{
            width: "400px",
            height: "300px",
            position: "relative",
            border: "1px blue solid",
          }}
        >
          <GraphCanvas
            layoutType="treeTd2d"
            nodes={[
              {
                id: "n-1",
                label: "A",
              },
              {
                id: "n-2",
                label: "B",
              },
              {
                id: "n-3",
                label: "C",
              },
              {
                id: "n-4",
                label: "D",
              },
              {
                id: "n-5",
                label: "E",
              },
            ]}
            edges={[
              {
                id: "1->2",
                source: "n-1",
                target: "n-2",
                label: "Edge 1-2",
              },
              {
                id: "2->3",
                source: "n-2",
                target: "n-3",
                label: "Edge 2-3",
              },
              {
                id: "1->5",
                source: "n-1",
                target: "n-5",
                label: "Edge 1-5",
              },
              {
                id: "5->4",
                source: "n-5",
                target: "n-4",
                label: "Edge 5-4",
              },
              {
                id: "4->3",
                source: "n-4",
                target: "n-3",
                label: "Edge 4-3",
              },
            ]}
          />
        </div>
        <div className="flex flex-row items-center gap-6">
          <div className="flex flex-col items-center gap-1">
            <div className="border-b-2 border-black">Find Shortest Path</div>
            <div className="text-xl font-bold">A {"->"} E</div>
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
