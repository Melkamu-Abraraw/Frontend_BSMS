"use client";
import React, { useState } from "react";
import * as yup from "yup";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
  const schema = yup.object().shape({
    Email: yup
      .string()
      .required("Email is required")
      .matches(emailRegex, "Invalid email format"),
    Password: yup.string().required("Password is required").min(8),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("Password"), null], "Passwords Does Not Match")
      .required("Confirm Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const router = useRouter();

  const showToastMessage = () => {
    toast.success("Manager is Successfully Registered!", {
      position: "top-right",
    });
  };

  const onSubmit = async (formData) => {
    const formDataToSend = new FormData();
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        formDataToSend.append(key, formData[key]);
      }
    }
    try {
      const response = await fetch(
        `http://localhost:3001/api/User/brokerAdminRegister`,
        {
          method: "POST",
          body: formDataToSend,
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data.data) {
        showToastMessage();
        setTimeout(() => {
          router.push("/dashboard/manage");
        }, 3000);
      }
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchPaymentData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/payment/transfer`,
        {
          method: "POST",
          body: JSON.stringify(persistedState),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log(responseData);

      if (responseData.paymentStatus === "Not Paid") {
        setPaymentStatus("Not Paid");
        setRedirectUrl(responseData.url);
      } else if (responseData.paymentStatus === "Paid") {
        setPaymentStatus("Paid");
        const pdfBlob = base64toBlob(responseData.pdfBase64Data);
        const pdfUrl = URL.createObjectURL(pdfBlob);
        setRedirectUrl(pdfUrl);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="mx-auto my-auto mb-3" style={{ width: "45%" }}>
        <form
          className="grid grid-cols-1 gap-3 p-6 bg-white shadow-lg rounded-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid grid-cols-1 gap-6">
            <div className="w-full">
              <div className="mb-2">
                <Label htmlFor="email" className="font-bold">
                  Account Owner Full Name:
                </Label>
              </div>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
              />
            </div>
            <div className="w-full">
              <div className="mb-2">
                <Label htmlFor="email" className="font-bold">
                  Account Number:
                </Label>
              </div>
              <Input
                type="text"
                id="account"
                name="account"
                placeholder="Account Number"
              />
            </div>
            <div className="flex flex-row">
              <div className="w-full">
                <div className="mb-2">
                  <Label htmlFor="email" className="font-bold">
                    Currency:
                  </Label>
                </div>
                <Input
                  type="number"
                  id="currency"
                  name="currency"
                  placeholder="Currency"
                />
              </div>
              <div className="w-full ml-2">
                <div className="mb-2">
                  <Label htmlFor="email" className="font-bold">
                    Amount:
                  </Label>
                </div>
                <Input
                  type="number"
                  id="amount"
                  name="amount"
                  placeholder="Amount"
                />
              </div>
            </div>

            <div className="w-full">
              <div className="mb-2">
                <Label htmlFor="email" className="font-bold">
                  Reference:
                </Label>
              </div>
              <Input
                type="number"
                id="reference"
                name="reference"
                placeholder="Reference"
              />
            </div>
          </div>
          <Button
            type="submit"
            variant="login"
            className="w-full"
            onClick={fetchPaymentData}
          >
            Register
          </Button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Register;
