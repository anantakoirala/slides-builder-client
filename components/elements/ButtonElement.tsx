"use client";
import React from "react";

type DroppedItem = {
  id: string;
  type: string;
  content: Record<string, DroppedItem[]>; // Recursive reference
};

type Props = {
  id: string;
  droppedItems: DroppedItem[];
  wholeItems: DroppedItem[];
};

const ButtonElement = ({ id, droppedItems, wholeItems }: Props) => {
  const findItemById = (wholeItems: DroppedItem[], id: string) => {
    //console.log("wholeitems", wholeItems);

    const ans = wholeItems.map((item) => {
      if (item.id === id) {
        return item;
      } else {
        //console.log("contents", item.content);
        // If there si content in items
        if (Object.keys(item.content).length > 0) {
          Object.entries(item.content).forEach(([columnId, droppedItems]) => {
            console.log("object bhitra ko", droppedItems);
            droppedItems.forEach((item) => {
              console.log("object bhitra ko item", item);
              if (item.id === id) {
                return item;
              }
            });
          });
        }
      }
    });
    console.log("ans", ans);
    // for (const item of wholeItems) {
    //   console.log("item", item);
    //   if (item.id === id) {
    //     return item; // Found at the top level
    //   }
    // }
  };

  console.log("id", id);

  return (
    <div
      className="w-fit h-14 bg-green-200 border rounded-lg flex items-center justify-center p-2 font-bold"
      onClick={() => findItemById(wholeItems, id)}
    >
      ButtonElement
    </div>
  );
};

export default ButtonElement;
