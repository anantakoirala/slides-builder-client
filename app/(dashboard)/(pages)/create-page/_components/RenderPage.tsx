"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import CreatePage from "./CreatePage";

type Props = {};
let page = "create";

const RenderPage = (props: Props) => {
  const router = useRouter();

  const renderStep = () => {
    switch (page) {
      case "create":
        return (
          <>
            <CreatePage />
          </>
        );
      case "create-scratch":
        return <></>;
      default:
        return null;
    }
  };
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={"create"}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        {renderStep()}
      </motion.div>
    </AnimatePresence>
  );
};

export default RenderPage;
