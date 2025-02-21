"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

type Props = {};

const NewProjectButton = (props: Props) => {
  const router = useRouter();
  return (
    <Button
      className="rounded-lg font-semibold"
      onClick={() => router.push("/create-page")}
    >
      <Plus />
      New Project
    </Button>
  );
};

export default NewProjectButton;
