import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";

const Login = () => {
  return (
    <div className="mx-auto w-1/3 my-auto mt-10">
      <form className="grid grid-cols-1 gap-6 p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold mx-auto">Sign in to BSMS</h1>
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
        <Button variant="login">Login</Button>
        <div className="flex items-center mt-4">
          <hr className="w-full border-gray-300" />
          <span className="mx-4 text-gray-500">OR</span>
          <hr className="w-full border-gray-300" />
        </div>
        <div className="flex md:flex-col lg:flex-row justify-between sm:flex-col sm:my-1:">
          <Button variant="outline">
            <Image
              src="/../images/login/gmail.png"
              width={20}
              height={20}
              className="mr-2"
            />
            Login with Email
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
          Don't have an account? <span className="font-bold ml-1"> SignUp</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
