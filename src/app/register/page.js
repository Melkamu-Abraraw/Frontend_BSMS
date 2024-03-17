import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import ImageUpload from "@/components/ImageUploader/ImageUploader";
import Link from "next/link";
const Register = () => {
  return (
    <div className="mx-auto my-auto mb-3" style={{ width: "45%" }}>
      <form className="grid grid-cols-1 gap-3 p-6 bg-white shadow-lg rounded-lg">
        <ImageUpload />
        <div className="grid grid-cols-2 gap-6 ">
          <div className="w-full">
            <div className="mb-2">
              <Label htmlFor="firstname">First Name</Label>
            </div>

            <Input type="firstname" id="firstname" placeholder="Firstname" />
          </div>
          <div className="w-full">
            <div className="mb-2">
              <Label htmlFor="lastname">Last Name</Label>
            </div>

            <Input type="text" id="lastname" placeholder="Lastname" />
          </div>
          <div className="w-full">
            <div className="mb-2">
              <Label htmlFor="phonenumber">Phone Number</Label>
            </div>

            <Input type="text" id="lastname" placeholder="Phonenumber" />
          </div>
          <div className="w-full">
            <div className="mb-2">
              <Label htmlFor="email">Email</Label>
            </div>

            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="w-full">
            <div className="mb-2">
              <Label htmlFor="password">Password</Label>
            </div>

            <Input type="password" id="password" placeholder="Password" />
          </div>
          <div className="w-full">
            <div className="mb-2">
              <Label htmlFor="confrimpassword">Confrim Password</Label>
            </div>
            <Input
              type="password"
              id="confrimpassword"
              placeholder="Confrimpassword"
            />
          </div>
        </div>

        <Button variant="login">Sign Up</Button>
        <div className="flex items-center">
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
            Sign Up with Facebook
          </Button>
        </div>
        <p className="flex justify-center md:flex-col lg:flex-row ">
          Do have an account?
          <Link href="/login">
            <span className="font-bold ml-1 text-green"> Login</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
