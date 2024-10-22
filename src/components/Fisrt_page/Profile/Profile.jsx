import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Navigation from "../Navigation/Navigation";
import Fotter from "../Home/Fotter/Fotter";
import useAuthContext from "../../../Context/ApiContext";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";

const schema = z.object({
  id: z.number().optional(),

  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  number: z.string().optional(),
});

function ProfileForm() {
  const { IsLogin, ProfileLogin, OrderUser } = useAuthContext([]);
  const { data: ProfileData, isLoading } = useQuery({
    queryKey: ["ProfileLoginProfile"],
    queryFn: () => IsLogin(),
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    retry: 3,
  });

  const {
    data: UserData,
    isLoading: user,
    refetch,
  } = useQuery({
    queryKey: ["UserData"],
    queryFn: () => {
      return ProfileLogin();
    },
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    retryOnMount: 3,
    enabled: !!ProfileData,
  });
  const { data: UserOrders, isLoading: loadingOrders } = useQuery({
    queryKey: ["UserOrders"],
    queryFn: () => OrderUser(UserData?.id),
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    retry: 3,
    enabled: !!UserData?.id,
  });

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,

    formState: { errors, isDirty, isSubmitting, submitCount },
  } = useForm({
    resolver: zodResolver(schema),
  });
  useEffect(() => {
    if (!isLoading && !ProfileData) {
      navigate("/");
    } else {
      setValue("first_name", UserData?.first_name);
      setValue("last_name", UserData?.last_name);
      setValue("email", UserData?.email);
      setValue("number", UserData?.phone_number);
      setValue("id", UserData?.id);
    }
  }, [isLoading, ProfileData, navigate, user, UserData]);
  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://commerce-backend-tau.vercel.app/UpdateUser", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",

        body: JSON.stringify(data),
      });

      await response.json();
      if (response.ok) {
        refetch();
        setValue("first_name", UserData?.first_name);
        setValue("last_name", UserData?.last_name);
        setValue("email", UserData?.email);
        setValue("number", UserData?.phone_number);
        setValue("id", UserData?.id);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="bg-white w-full flex flex-col gap-5 px-3  text-[#161931]">
      <Navigation></Navigation>
      <main className="">
        <form onSubmit={handleSubmit(onSubmit)} className="p-2 md:p-4">
          <div className="w-full px-6 pb-8 mt-8  sm:rounded-lg">
            <h2 className="pl-6 text-2xl font-bold sm:text-xl">
              Public Profile
            </h2>
            <div className="">
              <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                <div className="flex flex-col items-center w-full mb-2 space-y-2 gap-3 sm:flex-row sm:space-y-0 sm:mb-6">
                  <div className="w-full ">
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-[#d6764a]"
                    >
                      Your first name
                    </label>
                    <input
                      {...register("first_name")}
                      type="text"
                      id="first_name"
                      className="bg-slate-100 border border-[#d6764aa1] text-[#000000] text-sm rounded-lg w-full p-2.5 uppercase"
                      placeholder="Your first name"
                    />
                    {errors.first_name && (
                      <p className="text-red-600 text-sm">
                        {errors.first_name.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="last_name"
                      className="block mb-2 text-sm font-medium text-[#d6764a]"
                    >
                      Your last name
                    </label>
                    <input
                      {...register("last_name")}
                      type="text"
                      id="last_name"
                      className="bg-slate-100 border border-[#d6764aa1] text-[#000000] text-sm rounded-lg w-full p-2.5 uppercase"
                      placeholder="Your last name"
                    />
                    {errors.last_name && (
                      <p className="text-red-600 text-sm">
                        {errors.last_name.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-2 sm:mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-[#d6764a]"
                  >
                    Your email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    className="bg-slate-100 border border-[#d6764aa1] text-[#000000] text-sm rounded-lg w-full p-2.5"
                    placeholder="your.email@mail.com"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="mb-2 sm:mb-6">
                  <label
                    htmlFor="profession"
                    className="block mb-2 text-sm font-medium text-[#d6764a]"
                  >
                    Phone number
                  </label>
                  <input
                    {...register("number")}
                    type="text"
                    id="number"
                    className="bg-slate-100 border border-[#d6764aa1] text-[#000000] text-sm rounded-lg w-full p-2.5"
                    placeholder="Phone number"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    disabled={submitCount > 0}
                    type="submit"
                    className="text-white bg-[#c98f74] hover:bg-[#d6764a] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 flex items-center justify-center gap-7 disabled:bg-gray-200"
                  >
                    <Loader
                      className={`animate-spin ${!isSubmitting && "hidden"} `}
                    />
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="w-full px-6 pb-8 mt-8  sm:rounded-lg">
          <p className="pl-6 text-2xl font-bold sm:text-xl">Orders</p>
          <div className="w-full items-center mt-8 sm:mt-14">
            <div className="flex flex-col">
              <div className="">
                <div className="p-1.5 w-full inline-block align-middle">
                  <div className=" border rounded-lg overflow-x-scroll">
                    <table className="min-w-full divide-y divide-gray-200 overflow-scroll">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                          >
                            ID
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                          >
                            username
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                          >
                            total_amount
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                          >
                            address
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                          >
                            order_status
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                          >
                            Date
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 overflow-scroll">
                        {UserOrders?.map((Orders, key) => (
                          <tr key={key}>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                              {Orders?.id}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              {Orders?.fullname}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              {Orders?.total_amount}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              {Orders?.adresse}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                              {Orders?.order_status}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                              {Orders?.date?.slice(0, 10)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Fotter />
    </div>
  );
}

export default ProfileForm;
