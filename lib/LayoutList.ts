import {
  Columns,
  Columns2,
  Columns3,
  Columns4,
  RectangleHorizontal,
} from "lucide-react";

export default [
  {
    label: "Column",
    type: "column",
    numberOfColumns: 1,
    icon: RectangleHorizontal,
  },
  {
    label: "Column 2",
    type: "column-2",
    numberOfColumns: 2,
    icon: Columns2,
  },
  {
    label: "Column 3",
    type: "column-3",
    numberOfColumns: 3,
    icon: Columns3,
  },
  {
    label: "Column 4",
    type: "column-4",
    numberOfColumns: 4,
    icon: Columns4,
  },
];
