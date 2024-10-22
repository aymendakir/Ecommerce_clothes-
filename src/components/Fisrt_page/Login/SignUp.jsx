import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAuthContext from "../../../Context/ApiContext";

// Extend schema to include password validation
const signUpSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number is too short"),
  address: z.string().optional(),
  city: z.string().min(1, "City is required"),
  postalCode: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  region: z.string().optional(),
  password: z.string().min(8, "Password must be at least 8 characters long"), // Password field added
});

function SignUp() {
  const successSignUp = () => toast.success("Account create thanks!");
  const ErrorSignUp = () => toast.error("Account Not Create try again!");
  const { IsLogin } = useAuthContext([]);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://commerce-backend-tau.vercel.app/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,

          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      console.log(result);
      if (response.ok) {
        successSignUp();
      } else {
        ErrorSignUp();
      }
    } catch (error) {
      console.error("Error during signup:", error);
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
          <h2 className="text-xl font-semibold text-gray-800">Register</h2>
          <p className="text-sm text-gray-600 mt-2">
            Best place to buy Men products.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-800">
                First Name*
              </label>
              <input
                type="text"
                {...register("firstName")}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter your first name"
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-800">
                Last Name*
              </label>
              <input
                type="text"
                {...register("lastName")}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter your last name"
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            <div>
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

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-800">
                Phone Number*
              </label>
              <input
                type="text"
                {...register("phoneNumber")}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter your phone number"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            <div className="col-span-2">
              <label className="block mb-1 text-sm font-medium text-gray-800">
                Address
              </label>
              <input
                type="text"
                {...register("address")}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Address Line 1"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-800">
                City*
              </label>
              <input
                type="text"
                {...register("city")}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="City"
              />
              {errors.city && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.city.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-800">
                Post Code
              </label>
              <input
                type="text"
                {...register("postalCode")}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Post Code"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-800">
                Country*
              </label>
              <select
                {...register("country")}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="" disabled selected>
                  Country
                </option>
                <option value="Country 1">Country 1</option>
                <option value="Country 2">Country 2</option>
              </select>
              {errors.country && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.country.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-800">
                Region State
              </label>
              <select
                {...register("region")}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="" disabled selected>
                  Region/State
                </option>
                <option value="Region 1">Region 1</option>
                <option value="Region 2">Region 2</option>
              </select>
            </div>

            {/* Password field */}
            <div className="col-span-2">
              <label className="block mb-1 text-sm font-medium text-gray-800">
                Password*
              </label>
              <input
                type="password"
                {...register("password")}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter a strong password"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to={"/SignIn"} className="text-blue-600 hover:underline">
                Login
              </Link>
            </p>
            <button
              type="submit"
              className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-[#A87861] inline-flex disabled:bg-gray-200 disabled:text-white "
              disabled={!isValid}
            >
              {isSubmitting && <Loader2 className="animate-spin mr-2" />}
              Register
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
