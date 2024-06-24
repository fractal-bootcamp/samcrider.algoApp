import Djikstra from "@/components/advancedAlgos/Djikstra";
import TabDescriptor, {
  Algorithm,
} from "@/components/base/TabDescriptor/component";
import Link from "next/link";

const advancedAlgos: Algorithm[] = [
  {
    name: "Djikstra",
    component: <Djikstra />,
  },
];

const Component = () => {
  return (
    <div className="w-full h-full flex flex-col justify-evenly items-center">
      <Link href="/" className="btn btn-warning absolute left-24 top-24">
        Home
      </Link>
      <div className="text-6xl font-bold">Advanced Algorithms</div>
      <TabDescriptor algorithms={advancedAlgos} />
    </div>
  );
};

export default Component;
