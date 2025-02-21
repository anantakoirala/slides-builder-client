"use client";
import { useDroppable } from "@dnd-kit/core";
import React from "react";

type Props = {};

const Droppable = (props: Props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const style = {
    color: isOver ? "green" : undefined,
  };
  return (
    <div ref={setNodeRef} style={style} className="w-96 h-96 bg-orange-200">
      Droppable
    </div>
  );
};

export default Droppable;
