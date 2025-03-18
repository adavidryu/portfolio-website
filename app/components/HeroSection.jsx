"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import axios from 'axios'

const HeroSection = () => {
  const [downloadStatus, setDownloadStatus] = useState("");
  const [errorDetails, setErrorDetails] = useState("");
  const [isHovered, setIsHovered] = useState(false);

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#2a2a2a] opacity-90" />
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="col-span-7 place-self-center text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-sm font-medium border border-purple-500/20">
                  Welcome to my portfolio
                </span>
              </div>
              
              <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
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
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
                />
              </h1>
              
              <p className="text-[#ADB7BE] text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                As a high-performing computer science student at Texas A&M University,
                I love to challenge myself, collaborate with others, and forge lasting relationships.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span className="relative z-10">Hire Me</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                
                <button
                  className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 text-white font-medium border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105"
                  onClick={downloadResume}
                >
                  <span className="relative z-10">Download Resume</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
              
              {downloadStatus && (
                <p className="mt-2 text-sm text-white animate-fade-in">
                  {downloadStatus}
                </p>
              )}
              {errorDetails && (
                <p className="mt-2 text-sm text-red-500 animate-fade-in">
                  {errorDetails}
                </p>
              )}
            </div>
          </div>
          
          <div className="col-span-5 place-self-center mt-8 lg:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="relative rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] overflow-hidden border border-purple-500/20">
                <Image
                  src="/images/hero-image.png"
                  alt="hero image"
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover transition-transform duration-300 hover:scale-105"
                  width={400}
                  height={400}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection