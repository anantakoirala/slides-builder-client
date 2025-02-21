"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  containerVariants,
  CreatePageCard,
  itemVariants,
} from "@/lib/constants";
import { Button } from "@/components/ui/button";

type Props = {};

const CreatePage = (props: Props) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="space-y-8"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-primary">
          How would you like to get started?
        </h1>
        <p className="text-muted-foreground">
          Choose your prefered method to begin
        </p>
      </motion.div>
      <motion.div
        variants={containerVariants}
        className="grid gap-6 md:grid-cols-3"
      >
        {CreatePageCard.map((option) => (
          <motion.div
            key={option.type}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              rotate: 1,
              transition: { duratino: 0.1 },
            }}
            className={`${
              option.highlight ? "bg-red-200" : "bg-green-200 border"
            } rounded-xl p-[1px transition-all duration-300 ease-in-out]`}
          >
            <motion.div
              className="w-full p-4 flex-col gap-y-6 items-start bg-white dark:bg-black rounded-xl"
              whileHover={{ transition: { duration: 0.1 } }}
            >
              <div className="flex flex-col items-start w-full gap-y-3">
                <div>
                  <p className="text-primary text-lg font-semibold">
                    {option.title}
                  </p>
                  <p
                    className={`${
                      option.highlight ? "text-green-200" : "text-blue-400"
                    } text-4xl font-bold`}
                  >
                    {option.highlightedText}
                  </p>
                </div>
                <p className="text-muted-foreground text-sm font-normal">
                  {option.description}
                </p>
              </div>
              <motion.div
                className="self-end"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={option.highlight ? "default" : "outline"}
                  className="w-fit rounded-xl font-bold"
                  size={"sm"}
                >
                  {option.highlight ? "generate" : "continue"}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CreatePage;
