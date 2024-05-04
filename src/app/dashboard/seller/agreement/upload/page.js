"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function DialogDemo() {
  const [pdfs, setPdfs] = useState([]);
  const [users, setUsers] = useState([]);
  const [pdfError, setPdfError] = useState(false); // State to track PDF selection
  const [url, setUrl] = useState("");
  const persistedState = JSON.parse(localStorage.getItem("user"));

  const handlePdfChange = (event) => {
    const selectedPdfs = Array.from(event.target.files);
    setPdfs((prevPdfs) => [...prevPdfs, ...selectedPdfs]);
    setPdfError(false);
  };

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/docs/send-envelope`,
          {
            method: "POST",
            body: JSON.stringify(persistedState), // Send persistedState directly
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${persistedState.token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const res = await response.json();
        setUrl(res.url);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    if (persistedState) {
      fetchUserList();
    }
  }, []); // Empty dependency array, so it only runs once when component mounts

  return (
    <div className="flex justify-center flex-col items-center mt-20">
      {url ? (
        <div>
          <p className="font-semibold mb-2">
            Agreement Document is Available Sign Now
          </p>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Button variant="login">Sign Now</Button>
          </a>
        </div>
      ) : (
        <p className="font-semibold mb-2">No Agreement Document</p>
      )}
    </div>
  );
}
