import RenderColumnElement from "@/app/(dashboard)/(editor)/template/_components/RenderColumnElements";
import RenderElement from "@/app/(dashboard)/(editor)/template/_components/RenderElement";
import { useDroppable } from "@dnd-kit/core";
import React, { useEffect, useState } from "react";

type DroppedItem = {
  id: string;
  type: string;
  content: Record<string, DroppedItem[]>; // Recursive reference
};

type Props = {
  index: number;
  id: string;
  droppedItems: DroppedItem[];
};

const ColumnItems = ({ index, id, droppedItems }: Props) => {
  const [contents, setContents] = useState<DroppedItem[]>([]);
  const { isOver, setNodeRef } = useDroppable({
    id: `droppable-${index}-${id}`, // Unique ID for each column
  });

  useEffect(() => {
    const findContent = (
      droppedItems: DroppedItem[],
      index: number,
      id: string
    ) => {
      const foundObject = droppedItems.filter((item) => item.id === id);
      if (foundObject.length > 0) {
        const content = foundObject[0].content;

        const combinedId = `droppable-${index}-${id}`;
        if (Object.keys(content).length > 0) {
          setContents(content[combinedId]);
        }
      }
    };

    findContent(droppedItems, index, id);
  }, [droppedItems, index, id]);

  useEffect(() => {
    if (contents) {
      console.log("usef=effect content", contents.length);
    }
  }, [contents, droppedItems]);

  return (
    <div
      className={`border border-dashed p-2 ${isOver ? "bg-green-100" : ""}`}
      ref={setNodeRef}
    >
      {contents && contents.length > 0 && (
        <RenderColumnElement
          droppedItems={contents}
          wholeItems={droppedItems}
        />
      )}
    </div>
  );
};

export default ColumnItems;
