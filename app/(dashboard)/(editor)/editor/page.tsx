import React from "react";
import NavBar from "./_components/NavBar";
import LayoutPreview from "./_components/LayoutPreview";
import Editor from "./_components/Editor";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <NavBar />
      <div
        className="flex-1 flex overflow-hidden pt-16"
        // style={{
        //   color: currentTheme.accentColor,
        //   fontFamily: currentTheme.fontFamily,
        //   backgroundColor: currentTheme.backgroundColor,
        // }}
      >
        <LayoutPreview />
        <div className="flex-1 ml-64 pr-16">
          <Editor />
        </div>
      </div>
    </div>
  );
};

export default Page;
