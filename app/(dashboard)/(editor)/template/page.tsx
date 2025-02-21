"use client";
import React, { useEffect, useState } from "react";
import EditorHeader from "./_components/EditorHeader";
import Sidebar from "./_components/SideBar";
import Canvas from "./_components/Canvas";
import Settings from "./_components/Settings";
import { DndContext, DragEndEvent, DragStartEvent } from "@dnd-kit/core";

type Props = {};

type DroppedItem = {
  id: string;
  type: string;
  content: Record<string, DroppedItem[]>; // Recursive reference
};

const Page = (props: Props) => {
  const [droppedItems, setDroppedItems] = useState<DroppedItem[]>([]);
  const [numberOfCanvas, setNumberOfCanvas] = useState<number>(2);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || !active.id) {
      return; // Ensure active.id is not undefined
    }
    const droppableId = over.id as string;
    const droppedColumnId = droppableId.split("-"); // Extract the column ID

    // If item is dropped in column
    if (droppedColumnId[1] !== undefined) {
      const findItem = droppedItems.filter(
        (item) => item.id === droppedColumnId[2]
      );
      if (findItem.length > 0) {
        // Accessing the content of the found item
        const content = findItem[0].content;

        // Add or update the key-value pair in the content for a specific column
        const updatedContent = { ...content };

        if (!updatedContent[droppableId]) {
          updatedContent[droppableId] = [
            { type: String(active.id), id: Date.now().toString(), content: {} },
          ];
        } else {
          updatedContent[droppableId].push({
            type: String(active.id),
            id: Date.now().toString(),
            content: {},
          });
        }
        // Update the item with the new content
        const updatedDroppedItems = droppedItems.map((item) =>
          item.id === droppedColumnId[2]
            ? { ...item, content: updatedContent }
            : item
        );

        setDroppedItems(updatedDroppedItems); // if you're using state
      }
    } else {
      setDroppedItems((prev) => [
        ...prev,
        {
          type: String(active.id),
          id: Date.now().toString(),
          content: {} as Record<string, DroppedItem[]>,
        },
      ]);
    }

    // console.log("active 1", active?.id);
    // console.log("over 1", over?.id);
  };

  // const handleDragStart = (event: DragStartEvent) => {
  //   console.log("event", event);
  // };

  // useEffect(() => {
  //   console.log("droppedItems", droppedItems);
  // }, [droppedItems]);

  return (
    <div className="">
      <EditorHeader />
      <DndContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-5">
          <Sidebar />
          <div className="col-span-3 bg-gray-100">
            {/* {[...Array(numberOfCanvas)].map((_, i) => (
              <Canvas
                key={i}
                droppedItems={droppedItems}
                setDroppedItems={setDroppedItems}
                canvasNumber={i}
              />
            ))} */}
            <Canvas
              droppedItems={droppedItems}
              setDroppedItems={setDroppedItems}
            />
          </div>

          <Settings />
        </div>
      </DndContext>
    </div>
  );
};

export default Page;
