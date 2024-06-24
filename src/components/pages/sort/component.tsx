import TabDescriptor, {
  Algorithm,
} from "@/components/base/TabDescriptor/component";
import Bubble from "@/components/sortAlgos/Bubble";
import Insertion from "@/components/sortAlgos/Insertion";
import Merge from "@/components/sortAlgos/Merge";
import Quick from "@/components/sortAlgos/Quick";
import Selection from "@/components/sortAlgos/Selection";

const sortAlgos: Algorithm[] = [
  {
    name: "Quick",
    component: <Quick />,
  },
  {
    name: "Merge",
    component: <Merge />,
  },
  {
    name: "Insertion",
    component: <Insertion />,
  },
  {
    name: "Selection",
    component: <Selection />,
  },
  {
    name: "Bubble",
    component: <Bubble />,
  },
];

const Component = () => {
  return (
    <div className="w-full h-full flex flex-col justify-evenly items-center">
      <div className="text-6xl font-bold">Sort Algorithms</div>
      <TabDescriptor algorithms={sortAlgos} />
    </div>
  );
};

export default Component;
