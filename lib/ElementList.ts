import { Frame, Image, RectangleEllipsis, TextSelection } from "lucide-react";

export default [
  {
    icon: RectangleEllipsis,
    label: "Button",
    type: "Button",
    content: "Sample Button",
    url: "",
    style: {
      backgroundColor: "#007bff",
      color: "#ffffff",
      padding: "10px",
      width: "auto",
      textAlign: "center",
      fontSize: "16px",
      borderRadius: "10px",
      fontWeight: "normal",
    },
    outerStyle: `flex item-center justify-center`,
  },
  {
    icon: TextSelection,
    label: "Text",
    type: "Text",
    content: "Text",
    url: "",
    style: {
      backgroundColor: "#ffffff",
      color: "#000000",
      padding: "10px",
      width: "auto",
      textAlign: "center",
      fontSize: "22px",

      fontWeight: "normal",
    },
  },
  {
    icon: Image,
    label: "Image",
    type: "Image",
    content: "Text",
    imageUrl: "/dummy.jpg",
    alt: "image",
    url: "",
    style: {
      backgroundColor: "#ffffff",

      padding: "10px",
      height: "50%",
      width: "70%",
    },
    outerStyle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
    },
  },
  {
    icon: Frame,
    type: "Logo",
    label: "Logo",
    imageUrl: "/dummy.jpg",
    alt: "logo",
    url: "",
    style: {
      backgroundColor: "#ffffff",
      padding: "10px",
      height: "20%",
      width: "20%",
    },
    outerStyle: {
      display: "flex",
      justifyContent: "left",
      alignItems: "center",
      backgroundColor: "#fff",
    },
  },
];
