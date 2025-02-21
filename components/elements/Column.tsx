import { useDroppable } from "@dnd-kit/core";
import React from "react";
import ColumnItems from "./ColumnItems";

type DroppedItem = {
  id: string;
  type: string;
  content: Record<string, DroppedItem[]>; // Recursive reference
};

type Props = {
  numberOfColumns: number;
  id: string;
  droppedItems: DroppedItem[];
};

const Column = ({ numberOfColumns, id, droppedItems }: Props) => {
  return (
    <>
      <div>
        <div
          className="min-h-44 w-full"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)`,
            gap: "0px",
          }}
        >
          {Array.from({ length: numberOfColumns }).map((_, index) => (
            <ColumnItems
              key={index}
              index={index}
              id={id}
              droppedItems={droppedItems}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Column;
