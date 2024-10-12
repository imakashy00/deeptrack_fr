"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { CloudUpload } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const Verify = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    if (selectedFile) {
      setFile(selectedFile);
      setPrediction(null); // Reset prediction when a new file is selected
    }
  };

  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
      // It is basically first getting the reference of the file input and then performing click on it which same it is clicked by user
    }
  };

  useEffect(() => {
    const uploadFile = async () => {
      if (file) {
        setFileUploaded(true);
        setIsLoading(true);
        try {
          const formData = new FormData();
          formData.append("file", file);

          const response = await axios.post(
            "http://127.0.0.1:8000/predict",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          console.log(response.data.prediction);

          setIsLoading(false);
          setPrediction(response.data.prediction);
        } catch (error) {
          console.error("File upload failed", error);
        } finally {
          setFileUploaded(false);
        }
      }
    };

    uploadFile();
  }, [file]);

  return (
    <div className="sm:px-60 px-6 w-full h-auto">
      <Navbar />
      <div className="sm:px-40 px-0 sm:my-20 my-10 space-y-5">
        <div className="grid sm:grid-cols-5 sm:h-[50vh] h-[70vh] w-full sm:gap-0 gap-10 ">
          <div
            className="sm:col-span-3 border border-dashed bg-blue-300 flex flex-col justify-center items-center rounded-xl cursor-pointer"
            onClick={handleDivClick}
          >
            {file ? (
              <div className="relative w-full h-full">
                {/* URL.createObjectURL(file) is a method that creates a URL that represents the file object. This URL can be used to reference the file, allowing it to be used in various contexts, such as:

                    Creating a link to the file
                    Displaying the file as an image or video
                    Downloading the file
                    Uploading the file to a server */}
                <Image
                  src={URL.createObjectURL(file)}
                  alt="Uploaded file preview"
                  layout="fill"
                  objectFit="contain"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg">Click to replace image</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <CloudUpload className="text-white sm:size-20 size-10" />
                <p className="text-white sm:text-lg text-sm">
                  Click to upload or drag and drop an image
                </p>
              </div>
            )}
          </div>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
            accept="image/*"
            title="Upload Image"
          />
          <div className="sm:col-span-2 grid grid-rows-2 w-full">
            <div className="flex sm:justify-start sm:pl-10 justify-center items-center">
              <Button
                className="bg-blue-500 text-lg hover:bg-blue-400 w-4/5 py-8"
                onClick={handleDivClick}
                disabled={fileUploaded}
              >
                {isLoading
                  ? "Predicting..."
                  : file
                  ? "Upload Another"
                  : "Upload Image"}
              </Button>
            </div>
            <div className="flex sm:justify-start sm:pl-10 justify-center items-center ">
              <h2 className="w-4/5 bg-green-400 text-white rounded-lg py-8 text-center text-lg font-semibold px-5">
                {prediction ? prediction : "Upload image to get result"}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
