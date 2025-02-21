"use client";
import React from "react";
import TaskCard from "./TaskCard";
import { useDroppable } from "@dnd-kit/core";

type ColumnType = {
  id: string;
  title: string;
};

type TASK = {
  id: string;
  title: String;
  description: String;
  status: String;
};

type Props = {
  column: ColumnType;
  tasks: TASK[];
};

const Columns = ({ column, tasks }: Props) => {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });
  return (
    <div className="flex w-80 flex-col rounded-lg bg-neutral-800 p-4">
      <h2 className="mb-4 font-semibold text-neutral-100">{column.title}</h2>
      <div className="flex flex-1 flex-col gap-4" ref={setNodeRef}>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Columns;
