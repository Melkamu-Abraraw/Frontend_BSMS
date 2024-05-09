"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function DialogDemo() {
  const [pdfs, setPdfs] = useState([]);
  const [users, setUsers] = useState([]);
  const [sellerEmail, setSellerEmail] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [pdfError, setPdfError] = useState(false);
  const [loadingProperties, setLoadingProperties] = useState(true);
  const persistedState = JSON.parse(localStorage.getItem("user"));
  const router = useRouter();

  const docsSchema = yup.object().shape({
    Price: yup
      .number()
      .typeError("Price required and must be a number")
      .required("Price is required")
      .test(
        "is-positive",
        "Price must be a positive number",
        (value) => parseFloat(value) > 0
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(docsSchema),
  });

  const handleSellerChange = (value) => {
    setSellerEmail(value);
  };
  const handleBuyerChange = (value) => {
    setBuyerEmail(value);
  };
  const handlePdfChange = (event) => {
    const selectedPdfs = Array.from(event.target.files);
    setPdfs((prevPdfs) => [...prevPdfs, ...selectedPdfs]);
    setPdfError(false);
  };
  const handleRemovePdf = (indexToRemove) => {
    setPdfs((prevPdfs) =>
      prevPdfs.filter((_, index) => index !== indexToRemove)
    );
  };
  const showToastMessage = (message, type) => {
    console.log(message);
    toast.success(message, {
      position: "top-right",
    });
  };

  const handleClick = async (formData) => {
    console.log(sellerEmail, buyerEmail);
    if (pdfs.length === 0) {
      setPdfError(true);
    }

    const formDataToSend = new FormData();

    // Append each key-value pair from original formData

    // Assuming images is an array of File objects representing images

    formDataToSend.append("file", pdfs[0]);
    formDataToSend.append("sellerEmail", sellerEmail);
    formDataToSend.append("buyerEmail", buyerEmail);
    formDataToSend.append("Price", formData.Price);

    try {
      const response = await fetch(`http://localhost:3001/api/docs/upload`, {
        method: "POST",
        body: formDataToSend,
        headers: {
          Authorization: `Bearer ${persistedState.token}`, // Assuming your token is named `token`
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      if (data.success) {
        showToastMessage("The Agreement Documeent is Sent Successfully");
        setTimeout(() => {
          router.push("/dashboard/broker/"); // Redirect to login page after a delay
        }, 3000); // Adjust the delay time as needed
      }
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/User/`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${persistedState.token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setUsers(data.response);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoadingProperties(false);
      }
    };
    fetchUserList();
  }, []);

  return (
    <div className="flex justify-center items-center mt-4">
      <Dialog className="w-2/5">
        <DialogTrigger asChild>
          <Button variant="login">Upload Documents</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[900px]">
          <DialogHeader>
            <DialogTitle>Agreement Documents</DialogTitle>
            <DialogDescription>
              Upload Agreement Documents and Select a User From the List for
              whom the Documents is going to be Send
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="mt-4">
              <label htmlFor="title" className="font-bold">
                Agreement Documents Between Seller and Buyer:
              </label>
              <div className="w-full rounded-lg border border-gray-300 p-4">
                <input
                  id="pdf-upload"
                  type="file"
                  accept=".pdf" // Accepts only PDF files
                  multiple
                  onChange={handlePdfChange}
                  className="hidden"
                />
                <label
                  htmlFor="pdf-upload"
                  className="custom-file-upload block mx-auto text-center text-black rounded-lg p-2 cursor-pointer mt-4"
                >
                  Click to Select PDF files
                </label>
                <label
                  htmlFor="pdf-upload"
                  className="custom-file-upload block w-36 mx-auto text-center bg-green text-white rounded-lg p-2 cursor-pointer mt-1"
                >
                  Browse PDF files
                </label>
                <div className="flex flex-wrap">
                  {pdfs.map((pdf, index) => (
                    <div key={index} style={{ position: "relative" }}>
                      <embed
                        src={URL.createObjectURL(pdf)}
                        type="application/pdf"
                        className="max-w-200px m-2"
                      />
                      <button
                        aria-label="delete"
                        onClick={() => handleRemovePdf(index)}
                        className="absolute top-0 right-0 text-red-500 bg-transparent border-none cursor-pointer mb-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M15.293 4.293a1 1 0 0 1 1.414 1.414L11.414 12l5.293 5.293a1 1 0 1 1-1.414 1.414L10 13.414l-5.293 5.293a1 1 0 1 1-1.414-1.414L8.586 12 3.293 6.707a1 1 0 0 1 1.414-1.414L10 10.586l5.293-5.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
                {pdfError && (
                  <p className="text-red-500 mt-2">
                    Please select at least one PDF file
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <label htmlFor="title" className="font-bold">
                Seller:
              </label>
              <select
                className="block appearance-none marker w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                onChange={(e) => handleSellerChange(e.target.value)}
              >
                <option value="" disabled>
                  Select option
                </option>
                {users.map((user) => (
                  <option key={user.id} value={user.Email}>
                    {`${user.FirstName} ${user.LastName},  ${user.Email}`}
                  </option>
                ))}
              </select>
              <label htmlFor="title" className="font-bold">
                Buyer:
              </label>
              <select
                className="block appearance-none marker w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                onChange={(e) => handleBuyerChange(e.target.value)}
              >
                <option value="" disabled>
                  Select option
                </option>
                {users.map((user) => (
                  <option key={user.id} value={user.Email}>
                    {`${user.FirstName} ${user.LastName},  ${user.Email}`}
                  </option>
                ))}
              </select>
            </div>
            <Label htmlFor="title" className="font-bold mt-1">
              Final Price:
            </Label>
            <Input
              type="number"
              id="price"
              placeholder="Price"
              className="w-44"
              {...register("Price")}
            />
            <p className="p-1 text-red-600 text-sm">{errors.Price?.message}</p>
          </div>
          <DialogFooter>
            <Button variant="login" onClick={handleSubmit(handleClick)}>
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <ToastContainer />
    </div>
  );
}
