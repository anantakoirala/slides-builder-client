import Projects from "@/components/Projects";

import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="w-full flex flex-col gap-6 relative md:p-0 p-4">
      <div className="flex flex-col-reverse items-start w-full gap-6 sm:flex-row sm:justify-between sm:items-center">
        <div className="flex flex-col item-start">
          <h1 className="text-2xl font-semibold dark:text-primary backdrop-blur-lg">
            Projects
          </h1>
          <p className="text-base font-normal dark:text-secondary">
            All your work in one place
          </p>
        </div>
      </div>
      {/* projects */}
      <Projects />
    </div>
  );
};

export default Page;
