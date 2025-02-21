"use client";
import React from "react";
import { motion } from "framer-motion";
import { itemVariants } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Image } from "lucide-react";

type Props = {};

const ProjectCard = (props: Props) => {
  return (
    <motion.div
      variants={itemVariants}
      className="group w-full flex flex-col gap-y-3 rounded-xl p-3 transition-colors"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg cursor-pointer">
        {/* Thumbnail preview */}
        <div
          className={cn(
            "w-full relative aspect-[16/9] rounded-lg overflow-hidden transition-all duration-200"
          )}
          //   style={{fontFamily:theme.fontFamily,color:theme.accentColor,backgroundColor:theme.slideBackgroundColor,backgroundImage:theme.gradientBackground}}
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            color: "#7c4dff",
            backgroundColor: "#4527a0",
            backgroundImage: "linera-gradient(135deg,#311b92 0%,#4527a0 100%)",
          }}
        >
          <div className="scale-[0.5] origin-top-left w-[20%] h-[200%] overflow-hidden">
            {/* this is a slide */}
          </div>
          {/* If not slide */}
          <div className="w-full h-full bg-gray-400 flex justify-center items-center">
            <Image className="w-6 h-6 text-gray-500" />
          </div>
        </div>
      </div>
      <div className="w-full ">
        <div className="space-y-1">
          <h3 className="font-semibold text-base text-primary line-clamp-1">
            title
          </h3>
          <div className="flex w-full justify-between items-center gap-2">
            <p className="text-sm text-muted-foreground">created 1min ago</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
