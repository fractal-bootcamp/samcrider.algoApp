import dynamic from "next/dynamic";

const DynamicDjikstra = dynamic(() => import("./Djikstra"), {
  ssr: false,
});

export default DynamicDjikstra;
