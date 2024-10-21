import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import Fotter from "../Home/Fotter/Fotter";
import Navigation from "../Navigation/Navigation";
import useAuthContext from "../../../Context/ApiContext";
import { useQuery } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "lucide-react";

// Define schema for login validation
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

function Login() {
  const ErrorSignUp = () => toast.error("Error  try again!");
  const ErrorSignUpPssword = () =>
    toast.error("Email OR Password Not Match  try again!");
  const { IsLogin } = useAuthContext([]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors, isLoading, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",

        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        navigate("/");
      } else {
        ErrorSignUpPssword();
      }
    } catch (error) {
      console.error("Error during login:", error);
      ErrorSignUp();
    }
  };
  const { data: ProfileData } = useQuery({
    queryKey: ["ProfileLogin"],
    queryFn: () => {
      return IsLogin();
    },
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    retryOnMount: 3,
  });
  useEffect(() => {
    if (ProfileData) {
      navigate("/");
    }
  });

  return (
    <section className="py-10 sm:py-8">
      <ToastContainer />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-gray-800">Login</h2>
          <p className="text-sm text-gray-600 mt-2">
            Access your account to manage orders, wishlist, and more.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-800">
              Email*
            </label>
            <input
              type="email"
              {...register("email")}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-800">
              Password*
            </label>
            <input
              type="password"
              {...register("password")}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="text-right mb-4">
            <Link className="text-sm text-gray-500 hover:text-green-600">
              Forgot Password?
            </Link>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">
              Don{"'"}t have an account?{" "}
              <Link to={"/SignUp"} className="text-blue-600 hover:underline">
                Sign Up
              </Link>
            </p>
            <button
              disabled={isSubmitting}
              type="submit"
              className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-green-500 flex items-center gap-3 justify-center disabled:bg-gray-200"
            >
              <Loader
                className={`animate-spin hidden ${isSubmitting && "!block"}`}
              />
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
