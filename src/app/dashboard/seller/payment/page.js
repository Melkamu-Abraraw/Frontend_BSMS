"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Payement = () => {
  const transferMoney = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer CHASECK-xxxxxxxxxxxxxxxx");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      account_name: "Israel Goytom",
      account_number: "32423423",
      amount: "1",
      currency: "ETB",
      reference: "3241342142sfdd",
      bank_code: "fe087651-4910-43af-b666-bbd393d8e81f",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://api.chapa.co/v1/transfers", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  return (
    <>
      <div className="container flex flex-row items-end gap-2">
        <p className="text-green text-2xl font-semibold">Balance : </p>
        <p className="text-veryDarkBlue text-2xl">1,000,000 ETB</p>
      </div>
      <div className="container mt-4">
        <Link href="/dashboard/seller/payment/info">
          <Button
            className="bg-green hover:bg-green/65 "
            onClick={transferMoney}
          >
            Withdraw
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Payement;
