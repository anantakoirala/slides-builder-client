"use client";
import { useDraggable } from "@dnd-kit/core";
import React from "react";

type Props = {
  layout: any;
};

const ElementLayoutCard = ({ layout }: Props) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: layout.type,
    });

  const style = transform
    ? {
        transform: `translate(${transform.x}px,${transform.y}px)`,
        zIndex: isDragging ? 999 : 1, // Set a higher z-index when dragging
      }
    : {
        zIndex: 1, // Default z-index when not dragging
      };
  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="flex  z-10 flex-col items-center justify-center border border-dashed rounded-xl p-3 group hover:shadow-md hover:border-primary cursor-pointer"
      style={style}
    >
      <layout.icon className="p-2 h-8 w-8 group-hover:text-primary group-hover:bg-primary/10 rounded-full" />

      <h2 className="text-sm group-hover:text-primary">{layout.label}</h2>
    </div>
  );
};

export default ElementLayoutCard;
