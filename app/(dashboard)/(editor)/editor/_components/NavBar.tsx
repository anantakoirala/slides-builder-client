"use client";
import { Button } from "@/components/ui/button";
import { Home, Play, Share } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import PresentationMode from "./PresentationMode";

type Props = {};

const NavBar = (props: Props) => {
  const [isPresentationMode, setIsPresentationMode] = useState<boolean>(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/share/$presentationid`
    );
  };
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 w-full h-20 flex justify-between items-center py-4 px-7 border-b bg-primary"
      //   style={{
      //     backgroundColor:
      //       currentTheme.nabbarColor || currentTHeme.backgroundColor,
      //     color: currentTheme.accentColor,
      //   }}
    >
      <Link href={"/dashboard"} passHref>
        <Button
          variant={"outline"}
          className={`flex items-center gap-2`}
          //   style={{ backgroundColor: currentTheme.backgroundColor }}
        >
          <Home />
          <span className="hidden sm:inline">Return home</span>
        </Button>
      </Link>
      <Link
        href={"/presentation/template-market"}
        className="text-lg font-semibold hidden sm:block"
      >
        Title
        {/* or presentation editor */}
      </Link>
      <div className="flex items-center gap-4">
        <Button
          //   style={{ backgroundColor: currentTheme.backgroundColor }}
          variant={"outline"}
          onClick={handleCopy}
        >
          <Share className="w-4 h-4" />
        </Button>
        <Button
          variant={"default"}
          className="flex items-center gap-2 bg-background"
          onClick={() => setIsPresentationMode(true)}
        >
          <Play className="w-4 h-4" />
          <span className="hidden sm:inline">Present</span>
        </Button>
      </div>
      {/* {isPresentationMode && (
        <>
          <PresentationMode />
        </>
      )} */}
    </nav>
  );
};

export default NavBar;
