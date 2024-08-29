"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import axios from 'axios'

const HeroSection = () => {
  const [downloadStatus, setDownloadStatus] = useState("");
  const [errorDetails, setErrorDetails] = useState("");

  const downloadResume = async () => {
    try {
      setDownloadStatus("Downloading...");
      setErrorDetails("");

      const response = await axios.get("/api/download", {
        responseType: "blob",
      });

      // Check if the response is actually a blob
      if (!(response.data instanceof Blob)) {
        throw new Error("Response is not a blob");
      }

      const contentDisposition = response.headers["content-disposition"];
      const fileNameMatch = contentDisposition && contentDisposition.match(/filename="(.+)"/);
      const fileName = fileNameMatch ? fileNameMatch[1] : "resume.pdf";

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloadStatus("Downloaded successfully");
    } catch (error) {
      console.error("Error downloading file:", error);
      setDownloadStatus("Error downloading");
      if (error.response) {
        setErrorDetails(`Server error: ${error.response.status} - ${error.response.data}`);
      } else if (error.request) {
        setErrorDetails("No response received from server");
      } else {
        setErrorDetails(`Error: ${error.message}`);
      }
    }
  };

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center lg:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hi, I&apos;m
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Adam",
                1000,
                "an aspiring SWE",
                1000,
                "a team player",
                1000,
                "a car enthusiast",
                1000,
                "a volleyballer",
                1000,
                "much more..",
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            As a high-performing computer science student at Texas A&M University,
            I love to challenge myself, collaborate with others, and forge lasting relationships.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button
              className="inline-block px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white"
              onClick={downloadResume}
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download Resume
              </span>
            </button>
            {downloadStatus && <p className="mt-2 text-sm text-white">{downloadStatus}</p>}
            {errorDetails && <p className="mt-2 text-sm text-red-500">{errorDetails}</p>}
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection