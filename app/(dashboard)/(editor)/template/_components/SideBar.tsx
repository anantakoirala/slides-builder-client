import LayoutList from "@/lib/LayoutList";
import React from "react";
import ElementLayoutCard from "./ElementLayoutCard";
import ElementList from "@/lib/ElementList";

type Props = {};

const SideBar = (props: Props) => {
  return (
    <div className="p-4 h-screen">
      <h2 className="font-bold text-lg">Layouts</h2>
      <div className="grid grid-cols-2 gap-2 mt-3">
        {LayoutList.map((layout, index) => (
          <ElementLayoutCard layout={layout} key={index} />
        ))}
      </div>
      <h2 className="font-bold text-lg mt-2">Elements</h2>
      <div className="grid grid-cols-2 gap-2 mt-3">
        {ElementList.map((element, index) => (
          <div className="" key={index}>
            <ElementLayoutCard layout={element} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
