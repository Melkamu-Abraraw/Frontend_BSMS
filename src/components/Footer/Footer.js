import React from "react";
import { footer } from "../../data/Data";
import Image from "next/image";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container pl-6 pr-6">
          <div className="box">
            <div className="logo">
              <h2>Do You Need Help With Anything?</h2>
              <div className="flex flex-col text-white">
                <p className="text-white">Addis Abeba</p>
                <p className="text-white">+251994104901</p>
                <p className="text-white">wkusw2013@gmail.com</p>
              </div>
              <div className="input flex">
                <input type="text" placeholder="Email Address" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className="box">
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className="legal">
        <span>© 2021 RentUP. Designd By GorkCoder.</span>
      </div>
    </>
  );
};

export default Footer;
