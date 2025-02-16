"use client";
import { restApi } from "@/api";
import { handleApiError } from "@/lib/handleApiError";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

type Props = {};

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().nonempty("Password is required"), // Ensures password is not empty,
});

const Page = (props: Props) => {
  const route = useRouter();
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = form;

  const onSubmit = async (data: z.infer<typeof loginFormSchema>) => {
    try {
      const response = await restApi.post("/api/v1/auth/login", data);
      toast.success(response?.data?.message);
      route.push("/dashboard");
    } catch (error) {
      handleApiError(error);
    }
    console.log("data", data);
  };
  return (
    <div className=" flex h-screen w-full flex-row items-center justify-center">
      <div className="w-[50%]">
        <h1 className="lg:text-5xl text-3xl text-center font-extrabold">
          Log in
        </h1>
        <form className="mt-12" onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4">
            <input
              placeholder="Email"
              type="email"
              className="w-full bg-[#EFF0EB] text-gray-800 border-2 rounded-xl py-3.5 px-3 placeholder-gray-500 focus:outline-none"
              {...register("email", { required: true })}
            />
            {errors?.email && (
              <span className="text-red-600 -mt-1 text-xs">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="mt-4">
            <input
              placeholder="password"
              type="password"
              className="w-full bg-[#EFF0EB] text-gray-800 border-2 rounded-xl py-3.5 px-3 placeholder-gray-500 focus:outline-none"
              {...register("password", { required: true })}
            />
            {errors?.password && (
              <span className="text-red-600 -mt-1 text-xs">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="mt-10">
            <button
              className="rounded-full w-full p-3 font-bold bg-primary hover:bg-primary/90 text-white disabled:bg-[#EFF0EB] disabled:text-[#A7AAA2]"
              type="submit"
            >
              Log In
            </button>
          </div>
        </form>
        <div className="text-[14px text-center pt-12]">
          Dont have an account?
          <Link href={"/register"} className="text-primary underline">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
