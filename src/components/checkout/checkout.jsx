import React from "react";
import Back from "../Back/Back";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact mb mt-20">
        
        <div className="container">
      
          <form className="shadow">
          <h4 className="my-6 text-3xl font-semibold bg-green w-3/12 mx-auto py-1 rounded-sm text-center text-veryDarkBlue">
          Pay Property Listing Fee
        </h4>
            <h4>Fillup The Form</h4> <br />
            <div>
              <div className="w-full">
                <Input type="text" id="password" placeholder="Name" />
              </div>
              <div className="w-full">
                <Input type="email" id="password" placeholder="Email" />
              </div>
            </div>
            <h5 className="mb-2">Subject</h5>
            <textarea cols="30" rows="10"></textarea>
            <button className="bg-green text-veryDarkBlue font-normal rounded p-2">
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
