import TabDescriptor, {
  Algorithm,
} from "@/components/base/TabDescriptor/component";
import Binary from "@/components/searchAlgos/Binary";
import BreadthFirst from "@/components/searchAlgos/BreadthFirst";
import DepthFirst from "@/components/searchAlgos/DepthFirst";
import Linear from "@/components/searchAlgos/Linear";
import React from "react";

const searchAlgos: Algorithm[] = [
  {
    name: "Linear",
    component: <Linear />,
  },
  {
    name: "Binary",
    component: <Binary />,
  },
  {
    name: "Depth First",
    component: <DepthFirst />,
  },
  {
    name: "Breadth First",
    component: <BreadthFirst />,
  },
];

const Component = () => {
  return (
    <div className="w-full h-full flex flex-col justify-evenly items-center">
      <div className="text-6xl font-bold">Search Algorithms</div>
      <TabDescriptor algorithms={searchAlgos} />
    </div>
  );
};

export default Component;
