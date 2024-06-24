import { useState } from "react";
import TabContent from "../TabContent/component";
import s from "./styles.module.css";

export type Algorithm = {
  name: string;
  component: JSX.Element;
};

type Algorithms = {
  algorithms: Algorithm[];
};

const TabDescriptor = ({ algorithms }: Algorithms) => {
  const [currentTab, setCurrentTab] = useState<Algorithm>(algorithms[0]);

  const handleChangeTab = (tabToSet: Algorithm) => {
    setCurrentTab(tabToSet);
  };
  return (
    <div className={s.container}>
      <div className={s.buttonContainer}>
        {algorithms.map((algo, i) => {
          return (
            <button
              key={i}
              className={s.button}
              style={
                currentTab.name === algo.name
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "transparent" }
              }
              onClick={() => handleChangeTab(algo)}
            >
              {algo.name}
            </button>
          );
        })}
      </div>
      <TabContent currentTab={currentTab} />
    </div>
  );
};

export default TabDescriptor;
