"use client";
import React, { useState } from "react";
import GithubIcon from "/public/images/github-icon.svg";
import LinkedinIcon from "/public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONdata,
      });
      const resData = await response.json();

      if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
        e.target.reset();
        
        setTimeout(() => {
          setEmailSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-[#121212] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let&apos;s Connect
              </h2>
              <p className="text-gray-400 text-lg max-w-md">
                I&apos;m currently looking for new opportunities. I love to simply connect 
                so please contact me and I&apos;ll get back to you!
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              <Link 
                href="https://github.com/adavidryu"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="relative w-12 h-12 bg-[#2a2a2a] rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-purple-500/20 group-hover:scale-110">
                  <Image 
                    src={GithubIcon} 
                    alt="Github Icon" 
                    className="w-6 h-6 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </Link>
              <Link 
                href="https://www.linkedin.com/in/adamryu/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="relative w-12 h-12 bg-[#2a2a2a] rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-purple-500/20 group-hover:scale-110">
                  <Image 
                    src={LinkedinIcon} 
                    alt="Linkedin Icon" 
                    className="w-6 h-6 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#2a2a2a] p-8 rounded-2xl border border-purple-500/20"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
                  placeholder="someone@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
                  placeholder="Just saying hi!"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 resize-none"
                  placeholder="Let&apos;s talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-purple-500/50 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {emailSubmitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm text-center"
                >
                  Email sent successfully!
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;