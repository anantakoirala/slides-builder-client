"use client";
import React, { useState } from "react";
import Columns from "./_components/Columns";
import { DndContext, DragEndEvent } from "@dnd-kit/core";

type Props = {};

type Column = {
  id: string;
  title: string;
};

type TASKS = {
  id: string;
  title: String;
  description: String;
  status: String;
};

const columns: Column[] = [
  { id: "TODO", title: "To Do" },
  { id: "IN PROGRESS", title: "In Progress" },
  { id: "DONE", title: "Done" },
];

const INITIAL_TASKS: TASKS[] = [
  {
    id: "1",
    title: "Research Project",
    description: "Gather requirements and create initial document",
    status: "TODO",
  },
  {
    id: "2",
    title: "Design System",
    description: "Create component library and design tokens",
    status: "TODO",
  },
  {
    id: "3",
    title: "API Integration",
    description: "Implement REST API endpoints",
    status: "IN PROGRESS",
  },
  {
    id: "4",
    title: "DONE",
    description: "Implement REST API endpoints",
    status: "DONE",
  },
];

const Page = (props: Props) => {
  const [tasks, setTasks] = useState<TASKS[]>(INITIAL_TASKS);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) {
      return;
    }

    const taskId = active.id as string;
    const newStatus = over.id as TASKS["status"];
    console.log("taskId", taskId);
    console.log("newStatus", newStatus);
    setTasks(() =>
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };
  return (
    <div className="p-4">
      <div className="flex gap-8">
        <DndContext onDragEnd={handleDragEnd}>
          {columns.map((column) => (
            <Columns
              key={column.id}
              column={column}
              tasks={tasks.filter((task) => task.status === column.id)}
            />
          ))}
        </DndContext>
      </div>
    </div>
  );
};

export default Page;
