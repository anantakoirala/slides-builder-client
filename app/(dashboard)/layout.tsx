import AuthProvider from "@/contextProvider/AuthProvider";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <AuthProvider>
      <div className="w-full min-h-screen">{children}</div>
    </AuthProvider>
  );
};

export default layout;
