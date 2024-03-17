"use client";
import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { logout, login } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div className="mx-auto w-1/3 my-auto mt-10">
      <form className="grid grid-cols-1 gap-6 p-6 bg-white shadow-2xl rounded-lg">
        <h1 className="text-2xl font-semibold mx-auto">Sign In</h1>
        <div className="w-full">
          <div className="mb-3">
            <Label htmlFor="email">Email</Label>
          </div>

          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div className="w-full">
          <div className="mb-3">
            <Label htmlFor="email">Password</Label>
          </div>
          <Input type="password" id="password" placeholder="Password" />
        </div>
        <Link href="/" className="w-full">
          <Button
            variant="login"
            className="w-full text-1xl font-semibold text-veryDarkBlue hover:text-white"
            onClick={() => dispatch(login("Isayas"))}
          >
            Login
          </Button>
        </Link>
        <div className="flex items-center mt-4">
          <hr className="w-full border-gray-300" />
          <span className="mx-4 text-gray-500">OR</span>
          <hr className="w-full border-gray-300" />
        </div>
        <div className="flex md:flex-col lg:flex-row justify-between sm:flex-col sm:my-1:">
          <Button variant="outline">
            <Image
              src="/../images/login/g2.png"
              width={28}
              height={28}
              className="mr-2"
            />
            Login with Google
          </Button>
          <Button variant="outline">
            <Image
              src="/../images/login/fb.png"
              width={20}
              height={20}
              className="mr-2"
            />
            Login with Facebook
          </Button>
        </div>
        <p className="flex justify-center md:flex-col lg:flex-row ">
          Don't have an account?
          <Link href="/register">
            <span className="font-bold ml-1 mb-1 text-green"> SignUp</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
