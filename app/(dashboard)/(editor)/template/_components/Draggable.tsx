"use client";
import { useDraggable } from "@dnd-kit/core";
import React from "react";

type Props = {};

const Draggable = (props: Props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  return (
    <button
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="w-36 h-12 border rounded-lg bg-green-700"
    ></button>
  );
};

export default Draggable;
