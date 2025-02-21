import React from "react";
import { SidebarTrigger } from "./ui/sidebar";
import { Separator } from "./ui/separator";
import UpperInfoSearchBar from "./UpperInfoSearchBar";
import ThemeSwitcher from "./ThemeSwitcher";
import { Button } from "./ui/button";
import { Upload } from "lucide-react";
import NewProjectButton from "./NewProjectButton";

type Props = {};

const UpperInfoBar = (props: Props) => {
  return (
    <header className="sticky top-0 z-[10] flex shrink-0 flex-wrap items-center gap-2  bg-background p-4 justify-between">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <div className="w-full max-w-[95%] flex items-center justify-between gap-4 flex-wrap">
        <UpperInfoSearchBar />
        <ThemeSwitcher />
        <div className="flex flex-wrap gap-4 items-center justify-end">
          <Button className="bg-primary/80 rounded-lg hover:bg-primary text-base font-semibold cursor-not-allowed">
            <Upload />
            Import
          </Button>
          <NewProjectButton />
        </div>
      </div>
    </header>
  );
};

export default UpperInfoBar;
