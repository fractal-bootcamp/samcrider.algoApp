import type { Node } from "@/components/advancedAlgos/Djikstra";

type ShortestDistance = {
  A?: number;
  B?: number;
  C?: number;
  D?: number;
  E?: number;
};

export type WrappedDjikstraReturn = {
  closestNode: string;
  shortestDistance: ShortestDistance;
};

export const wrappedDjikstra = (
  graph: Node[],
  start: string
): WrappedDjikstraReturn[] => {
  // copy graph
  let copyGraph: Node[] = graph;
  let steps: WrappedDjikstraReturn[] = [];

  const djikstra = (graph: Node[], start: string) => {
    // init obj to hold shortest distance to all nodes from start node
    // TODO: change any type
    let shortestDistances: any = {};

    // init set to hold all visited nodes
    let visitedNodes = new Set();

    // get all of the nodes
    let allNodes: string[] = [];
    graph.forEach((node) => {
      allNodes.push(node.node);
    });

    // add all nodes to shortest distance obj and set their distances to infinity
    for (let node of allNodes) {
      shortestDistances[node] = Infinity;
    }

    // the start node distance should be 0
    shortestDistances[start] = 0;

    // loop through until all nodes have been checked
    while (allNodes.length) {
      // sort the nodes by distance
      allNodes.sort((a, b) => shortestDistances[a] - shortestDistances[b]);
      // set the 'closested node' aka the first one in the array because we sorted them
      let closestNode: string = allNodes.shift() as string;

      // something bad happened
      if (shortestDistances[closestNode] === Infinity) {
        break;
      }

      // the closest node is currently the start node with
      // distance 0 so add it to visited
      visitedNodes.add(closestNode);

      // get the entire object that makes up the node
      const fullClosestNode = graph.find((node) => node.node === closestNode);
      if (!fullClosestNode) {
        break;
      }

      // loop through the connections the node has
      graph[graph.indexOf(fullClosestNode)].data.forEach((curr) => {
        /* there are only two vals in the connection array in the current data element */
        // if we haven't visited the connection node
        if (!visitedNodes.has(curr.connection[0])) {
          // calc the distance
          let newDistance = shortestDistances[closestNode] + curr.d;

          // if the new distance is less than the currently stored distance for the node
          if (newDistance < shortestDistances[curr.connection[0]]) {
            // Update the shortest distance to this node
            shortestDistances[curr.connection[0]] = newDistance;
            steps.push({ closestNode, shortestDistance: shortestDistances });
          }

          // if we haven't visited the connection node
        } else if (!visitedNodes.has(curr.connection[1])) {
          // calc the distance
          let newDistance = shortestDistances[closestNode] + curr.d;

          // if the new distance is less than the currently stored distance for the node
          if (newDistance < shortestDistances[curr.connection[1]]) {
            // Update the shortest distance to this node
            shortestDistances[curr.connection[1]] = newDistance;
            steps.push({ closestNode, shortestDistance: shortestDistances });
          }
        }
      });
    }
    return shortestDistances;
  };

  djikstra(copyGraph, start);

  return steps;
};
