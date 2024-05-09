"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function DialogDemo() {
  const [redirectUrl, setRedirectUrl] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const persistedState = JSON.parse(localStorage.getItem("user"));
  const base64toBlob = (base64Data) => {
    const byteCharacters = atob(base64Data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: "application/pdf" });
  };
  useEffect(() => {
    const fetchPaymentData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/payment/pay`, {
          method: "POST",
          body: JSON.stringify(persistedState),
          headers: {
            "Content-Type": "application/json",
          },
        });

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

    fetchPaymentData();
  }, []);

  return (
    <div className="flex justify-center flex-col items-center mt-20">
      {paymentStatus === "Paid" ? (
        <a href={redirectUrl} download="certificate.pdf">
          Download Certificate
        </a>
      ) : (
        <Link href={redirectUrl}>
          <h1>Redirecting to Payment...</h1>
        </Link>
      )}
    </div>
  );
}
