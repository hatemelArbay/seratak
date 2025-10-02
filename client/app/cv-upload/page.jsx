"use client";

import React, { useRef, useState } from "react";
import { ValidationError } from "@formspree/react";
import { message } from "antd";
import axios from "axios";

const Page = () => {
  const [loading, setLoading] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const fileRef = useRef(null);
  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;


  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
        name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      file: await handleFileUpload()
    };
  
    const response = await axios.post(`${baseUrl}/contactRequest/postContactRequest`);
    if (response.data.success) {

    setLoading(false);
    message.success("✅ تم إرسال النموذج بنجاح!");
    }
  };

  const handleFileUpload= async()=>{
    const formData = new FormData();
    formData.append('file', fileRef.current.files[0]);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);
    formData.append("resource_type", "raw");
    try {
           const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/raw/upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return res.data.secure_url; 
    }catch(err){
        console.log("Error in file upload", err);
    }


  }
  return (
    <section id="upload-cv" className="py-20 px-6">
      <h1 className="text-3xl font-semibold text-center font-tajawal text-white w-fit py-4 mx-auto px-6 mt-10 rounded-tl-2xl border border-dashed border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl bg-orange-300 mb-16">
        ✨ ارفع سيرتك الذاتية
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        {/* FORM */}
        <form
          onSubmit={submitForm}
          className="w-full md:w-1/2 bg-gray-50 shadow-lg rounded-2xl p-8 space-y-6"
        >
          {/* Name */}
          <input
            required
            ref={nameRef}
            type="text"
            placeholder="⫷ الاسم الكامل"
            name="name"
            className="w-full p-3 border rounded-full text-gray-700 bg-white border-gray-300"
          />
          <ValidationError prefix="Name" field="name"  />

          {/* Email */}
          <input
            required
            ref={emailRef}
            type="email"
            placeholder="عنوان البريد الإلكتروني"
            name="email"
            className="w-full p-3 border rounded-full text-gray-700 bg-white border-gray-300"
          />
          <ValidationError prefix="Email" field="email" />

          {/* Phone */}
          <input
            required
            ref={phoneRef}
            type="tel"
            placeholder="رقم الهاتف"
            name="phone"
            className="w-full p-3 border rounded-full text-gray-700 bg-white border-gray-300"
          />
          <ValidationError prefix="Phone" field="phone"  />

          {/* File Upload */}
          <div className="w-full">
            <label className="block mb-2 text-gray-600 font-medium">
              📂 حمّل سيرتك الذاتية
            </label>
            <input
              required
              ref={fileRef}
              type="file"
              name="file"
              accept=".pdf,.doc,.docx"
              className="w-full p-3 border border-dashed border-gray-400 text-gray-700 bg-white rounded-2xl cursor-pointer"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            // disabled={state.submitting}
            className="w-full bg-[#153d3e] text-white py-3 rounded-full text-lg font-semibold hover:bg-[#1b4f50] transition duration-300"
          >
            {loading ? "⏳ جاري الإرسال..." : "🚀 ارسال السيرة الذاتية"}
          </button>
        </form>

        {/* IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center hidden sm:block">
          <img
            src="/images/uploadCv.png"
            alt="Upload CV"
            className="w-3/4 md:w-full max-md:mt-6"
          />
        </div>
      </div>
    </section>
  );
};

export default Page;
