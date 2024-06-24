import Card, { AlgoTypes } from "@/components/base/Card";
import React from "react";

const algoTypes: AlgoTypes[] = [
  {
    title: "Search",
    description: "Locate specific items within a collection of data",
    image: "/search.png",
    link: "/search",
  },
  {
    title: "Sort",
    description:
      "Rearrange a given array or list of elements according to a comparison operator",
    image: "/sort.png",
    link: "/sort",
  },
  {
    title: "Advanced",
    description: "Hard to grasp algorithms that do cool stuff",
    image: "/advanced.png",
    link: "/advanced",
  },
];

const Component = () => {
  return (
    <div className="w-full h-full flex flex-col justify-evenly items-center">
      <div className="text-6xl font-bold">Algorithm Visualizer</div>
      <div className="flex flex-row gap-6 flex-wrap justify-center">
        {algoTypes.map((type, i) => {
          return (
            <Card
              key={i}
              title={type.title}
              description={type.description}
              image={type.image}
              link={type.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Component;
