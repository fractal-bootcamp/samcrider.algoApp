import type { Algorithm } from "../TabDescriptor/component";
import s from "./styles.module.css";

type TabContentProps = {
  currentTab: Algorithm;
};

const TabContent = ({ currentTab }: TabContentProps) => {
  return (
    <div className={s.contentContainer}>
      <div className="w-full h-full flex justify-center items-center">
        {currentTab.component}
      </div>
    </div>
  );
};

export default TabContent;
