import {
  DSResult,
  ReturnOfCreateNode,
} from "@/components/searchAlgos/DepthFirst";

export const depthFirstSearch = (
  node: ReturnOfCreateNode,
  numToFind: number
): DSResult[] => {
  if (!node) {
    return [];
  }

  const stack = [node];
  const result: DSResult[] = [];

  while (stack.length > 0) {
    // remove last node from stack
    const current = stack.pop();
    // check if equal to numToFind
    if (current?.value === numToFind) {
      result.push({ value: current.value, found: true });
      return result;
    }
    // else push value and check children
    result.push({ value: current?.value, found: false });

    // if node has right child, push child to stack
    if (current?.right) {
      stack.push(current.right);
    }

    // if node has left child, push child to stack
    if (current?.left) {
      stack.push(current.left);
    }
  }

  return result;
};
