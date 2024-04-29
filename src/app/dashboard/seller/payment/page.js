import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Payement = () => {
  return (
    <>
      <div className="container flex flex-row items-end gap-2">
        <p className="text-green text-2xl font-semibold">Balance : </p>
        <p className="text-veryDarkBlue text-2xl">1,000,000 ETB</p>
      </div>
      <div className="container mt-4">
        <Link href="/dashboard/seller/payment/info">
          <Button className="bg-green hover:bg-green/65 ">Withdraw</Button>
        </Link>
      </div>
    </>
  );
};

export default Payement;
