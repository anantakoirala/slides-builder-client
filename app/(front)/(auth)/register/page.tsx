"use client";
import Link from "next/link";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { restApi } from "@/api";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { handleApiError } from "@/lib/handleApiError";

type Props = {};

const formSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(5).nonempty("Password is required"), // Ensures password is not empty,
    confirmPassword: z.string().nonempty("Confirm Password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // Error will be attached to confirmPassword
  });

const Page = (props: Props) => {
  const route = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = form;

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const response = await restApi.post("/api/v1/auth/register", data);

      toast.success(response?.data?.message);
      route.push("/login");

      console.log("data", data);
    } catch (error) {
      handleApiError(error);
    }
  };
  return (
    <div className=" flex h-screen w-full flex-row items-center justify-center">
      <div className="w-[50%]">
        <h1 className="lg:text-5xl text-3xl text-center font-extrabold">
          Register
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-12">
          <div className="mt-4">
            <input
              placeholder="Email"
              type="email"
              className="w-full bg-[#EFF0EB] text-gray-800 border-2 rounded-xl py-3.5 px-3 placeholder-gray-500 focus:outline-none"
              {...register("email")}
            />
            {errors && errors.email && (
              <span className="text-red-600 text-sm">
                {errors?.email.message}
              </span>
            )}
          </div>
          <div className="mt-4">
            <input
              placeholder="password"
              type="password"
              className="w-full bg-[#EFF0EB] text-gray-800 border-2 rounded-xl py-3.5 px-3 placeholder-gray-500 focus:outline-none"
              {...register("password")}
            />
            {errors && errors.password && (
              <span className="text-red-600 text-sm">
                {errors?.password.message}
              </span>
            )}
          </div>
          <div className="mt-4">
            <input
              placeholder="Confirm Password"
              type="password"
              className="w-full bg-[#EFF0EB] text-gray-800 border-2 rounded-xl py-3.5 px-3 placeholder-gray-500 focus:outline-none"
              {...register("confirmPassword")}
            />
            {errors && errors.confirmPassword && (
              <span className="text-red-600 text-sm">
                {errors?.confirmPassword.message}
              </span>
            )}
          </div>
          <div className="mt-10">
            <button
              className="rounded-full w-full p-3 font-bold bg-primary hover:bg-primary/90 text-white disabled:bg-[#EFF0EB] disabled:text-[#A7AAA2]"
              type="submit"
              disabled={
                !watch("email") ||
                !watch("password") ||
                !watch("confirmPassword")
              }
            >
              Register
            </button>
          </div>
        </form>
        <div className="text-[14px text-center pt-12]">
          Already have an account?
          <Link href={"/login"} className="text-primary underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
