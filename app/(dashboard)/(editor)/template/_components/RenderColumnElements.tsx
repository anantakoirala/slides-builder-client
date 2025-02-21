import ButtonElement from "@/components/elements/ButtonElement";
import Column from "@/components/elements/Column";
import { Button } from "@/components/ui/button";
import React from "react";

type DroppedItem = {
  id: string;
  type: string;
  content: Record<string, DroppedItem[]>; // Recursive reference
};
type Props = {
  droppedItems: DroppedItem[];
  wholeItems: DroppedItem[];
};

const RenderColumnElement = ({ droppedItems, wholeItems }: Props) => {
  console.log("hello", wholeItems);
  const getLayoutComponent = (type: string, id: string) => {
    if (type === "column") {
      return <Column numberOfColumns={1} id={id} droppedItems={droppedItems} />;
    } else if (type === "column-2") {
      return <Column numberOfColumns={2} id={id} droppedItems={droppedItems} />;
    } else if (type === "column-3") {
      return <Column numberOfColumns={3} id={id} droppedItems={droppedItems} />;
    } else if (type === "column-4") {
      return <Column numberOfColumns={4} id={id} droppedItems={droppedItems} />;
    } else if (type === "Button") {
      return (
        <ButtonElement
          id={id}
          droppedItems={droppedItems}
          wholeItems={wholeItems}
        />
      );
    } else {
      return null;
    }
  };
  return (
    <div className="text-primary flex flex-col gap-1">
      {droppedItems.length > 0 &&
        droppedItems.map((dropped, index) => (
          <React.Fragment key={index}>
            {getLayoutComponent(dropped.type, dropped.id)}
          </React.Fragment>
        ))}
    </div>
  );
};

export default RenderColumnElement;
