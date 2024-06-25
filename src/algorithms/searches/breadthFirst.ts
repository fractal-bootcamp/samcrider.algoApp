import {
  BSResult,
  ReturnOfCreateNode,
} from "@/components/searchAlgos/BreadthFirst";

export const breadthFirstSearch = (
  node: ReturnOfCreateNode,
  numToFind: number
): BSResult[] => {
  if (!node) {
    return [];
  }

  const queue = [node];
  const result: BSResult[] = [];

  while (queue.length) {
    // remove first node from queue
    const current = queue.shift();
    // check if equal to numToFind
    if (current?.value === numToFind) {
      result.push({ value: current.value, found: true });
      return result;
    }
    // else push value and then check children
    result.push({ value: current?.value, found: false });

    // if node has left child, push child to queue
    if (current?.left) {
      queue.push(current.left);
    }

    // if node has right child, push child to queue
    if (current?.right) {
      queue.push(current.right);
    }
  }

  return result;
};
