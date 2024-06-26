import { wrappedDjikstra } from "@/algorithms/advanced/djikstra";
import React, { useEffect, useState } from "react";
import { GraphCanvas } from "reagraph";

// type
export type Node = {
  node: string;
  data: {
    d: number;
    connection: string[];
  }[];
};

/* setting up graph */

// all connections with their distances
const distances: {
  d: number;
  connection: string[];
}[] = [
  { d: 1, connection: ["A", "B"] },
  { d: 2, connection: ["A", "E"] },
  { d: 1, connection: ["B", "C"] },
  { d: 2, connection: ["E", "D"] },
  { d: 2, connection: ["D", "C"] },
];

// function that searches through distances and returns all that
// include the current node (letter)
const getDistances = (
  letter: string,
  d: typeof distances
): typeof distances => {
  // get all distances where distance.nodes includes letter
  let allDistances: typeof distances = [];
  d.forEach((currD) => {
    if (currD.connection.includes(letter)) {
      allDistances.push(currD);
    }
  });
  return allDistances;
};

// function that gets all the distances of the current node (letter)
// returns both the node identifier (letter) and all its connections in an object
const getNode = (letter: string): Node => {
  return { node: letter, data: getDistances(letter, distances) };
};

// graph of nodes
const graph: Node[] = [
  getNode("A"),
  getNode("B"),
  getNode("C"),
  getNode("D"),
  getNode("E"),
];

// default steps init
// TODO: change any type
const defaultSteps: any[] = [];

const Djikstra = () => {
  const [steps, setSteps] = useState(defaultSteps);
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const steps = wrappedDjikstra(graph, "A");
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
            <div className="text-xl font-bold">A {"->"} C</div>
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
