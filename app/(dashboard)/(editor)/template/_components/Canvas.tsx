"use client";
import { useDroppable } from "@dnd-kit/core";
import React from "react";
import RenderElement from "./RenderElement";

type DroppedItem = {
  id: string;
  type: string;
  content: Record<string, DroppedItem[]>; // Recursive reference
};
type Props = {
  droppedItems: DroppedItem[];
  setDroppedItems: React.SetStateAction<any>;
};

const Canvas = ({ droppedItems, setDroppedItems }: Props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: `droppable`,
  });

  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div className="mt-20 flex justify-center">
      <div
        className={`${
          isOver ? "bg-red-300" : "bg-white"
        } p-6 w-full max-w-2xl h-96`}
        ref={setNodeRef}
        style={style}
      >
        <div className="">
          <RenderElement droppedItems={droppedItems} />
        </div>
      </div>
    </div>
  );
};

export default Canvas;
