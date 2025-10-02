"use client";

import React, { use, useEffect, useState } from "react";
import emailjs from "emailjs-com";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import { FaWhatsapp } from "react-icons/fa6";
import { FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

import Link from "next/link";

const page = () =>{ 
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  // بيانات النموذج
  const [selectedCountryCode, setSelectedCountryCode] = useState("eg");
  const [phone, setPhone] = useState("");
  const [countryName, setCountryName] = useState(""); // للاختيار من القائمة - اسم الدولة
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [emailLoading,setEmailLoading] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,cca2"
        );
        const data = response.data
          .map((country) => ({
            name: country.name.common,
            cca2: country.cca2.toLowerCase(),
          }))
          .sort((a, b) => a.name.localeCompare(b.name));

        setCountries(data);

        const defaultCountry = data.find((c) => c.cca2 === selectedCountryCode);
        setCountryName(defaultCountry ? defaultCountry.name : "");
      } catch (error) {
        console.error("فشل تحميل الدول:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const handleCountryChange = (e) => {
    const cca2 = e.target.value;
    setSelectedCountryCode(cca2);
    const selected = countries.find((c) => c.cca2 === cca2);
    setCountryName(selected ? selected.name : "");
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setEmailLoading(true);

  try {
     await sendEmailToCustomer(); 
      
    await sendEmailToAdmin();    
  
  } catch (error) {
    console.error("Error sending email:", error);
    alert("حدث خطأ أثناء الإرسال ❌");
  } finally {
     alert("تم إرسال النموذج بنجاح!");
    setEmailLoading(false);  
        setPhone("");
        setCountryName("");
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
        setFile(null);
  }
};

  const sendEmailToCustomer = async (e) => {

    emailjs
      .send(
        "service_3a0temj",   
        "template_4u730bf", 
        {
          ToEmail: email,
          name : firstName + " " + lastName,
          message: message,
        } ,
        "faVvpQ1ZIyAvDuJpf"    
      )
      .then(
        (result) => {
          // console.log("Email sent successfully:", result.text);
         
          // form.current.reset();
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("Something went wrong ❌ Please try again.");
        }
      );
  };
  const sendEmailToAdmin =async  (e) => {

    const cvURL= await handleCvUpload(file);
    const emailSubject ="طلب جديد لإنشاء سيرة ذاتية";
    const emailData =`   السيد/ مسؤول النظام

 : نود إبلاغكم بأن مستخدماً جديداً قد قام بتقديم طلب لإنشاء سيرة ذاتية من خلال الموقع، وذلك وفقاً للبيانات التالية

: صورة النموذج المطلوب

  ${cvURL}

 ${firstName + " " + lastName} : الاسم

 ${email} : البريد الإلكتروني

 ${phone} : رقم الهاتف

 ${countryName} : الدولة

: الرسالة 

 ${message}

نرجو منكم متابعة الطلب والتواصل مع المستخدم في أقرب وقت ممكن.

وتفضلوا بقبول فائق الاحترام،
فريق الدعم الفني`
    emailjs
      .send(
        "service_3a0temj",   
        "template_40qk0hr", 
        {
          subject: emailSubject,
          message: emailData,
        // cvUrl:cvURL,
        //  fullName: firstName + " " + lastName,
        //  email: email,
        //  phone: phone,
        //  country: countryName,
        //  message: message,
        } ,
        "faVvpQ1ZIyAvDuJpf"    
      )
      .then(
        (result) => {
       
        
          // form.current.reset();
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("Something went wrong ❌ Please try again.");
        }
      );
  };
  const handleCvUpload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);

  try {
    const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
      method: "POST",
      body: data,
    });

    const uploadedFile = await res.json();
    return uploadedFile.secure_url; 
  } catch (err) {
    console.error("Upload error:", err);
  }
};

  return (
    <>
    
      <Link
        href={"+20 10 13181574"}
        className="flex justify-center items-center text-white w-fit my-6 py-2 px-6 text-3xl courser-pointer mx-auto bg-green-500 border-2 rounded-2xl"
      >
        <FaWhatsapp className="pl-5 text-white size-14" />
        <h1 className="font-tajawal">
          <b className="pl-4 text-white h-16">|</b>563468861 966+
        </h1>
      </Link>
     <Link 
      href="https://wa.me/201013181574"
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center items-center text-white w-fit my-6 py-2 px-6 text-3xl cursor-pointer mx-auto bg-green-500 border-2 rounded-2xl hover:bg-green-600 transition"
    >
      <FaWhatsapp className="pl-2 text-white size-14" />
      <h1 className="font-tajawal flex items-center">
        <b className="pl-4 text-white">|</b>
        <span dir="ltr" className="pl-4 ">+20 101 318 1574</span>
      </h1>
    </Link>
   <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-4 p-6 bg-white rounded-2xl shadow-md text-gray-800">
            <FaMapMarkerAlt className="text-3xl text-red-500" />
            <span className="text-lg font-medium leading-relaxed">
              القاهرة: مدينة نصر - مكرم عبيد <br /> بجوار برج السحيلي
            </span>
              <div className="flex items-center justify-center gap-3 mb-4">
        <FaEnvelope className="text-blue-500 text-2xl" />
        <a
          href="mailto:support@seretak.com"
          className="text-lg font-tajawal text-blue-600 hover:underline"
        >
          support@seretak.com
        </a>
      </div>
          </div>
     
     
      <div className="max-w-5xl mx-auto p-6 font-tajawal bg-white rounded-xl shadow-lg mt-16">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#153d3e]">
          ارسل طلبك لتصميم النموذج
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              className="block mb-1 text-black font-semibold"
              htmlFor="file"
            >
              رفع صورة النموذج المطلوب
            </label>
            <input
              type="file"
              id="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
            {file && (
              <p className="mt-2 text-sm text-green-600">
                تم اختيار الملف: {file.name}
              </p>
            )}
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label
                className="block mb-1 text-gray-600 font-semibold"
                htmlFor="firstName"
              >
                الاسم الأول
              </label>
              <input
                id="firstName"
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border text-black border-gray-300 rounded-md p-2"
                placeholder="الاسم الأول"
              />
            </div>
            <div className="flex-1">
              <label
                className="block mb-1 text-gray-600 font-semibold"
                htmlFor="lastName"
              >
                الاسم الأخير
              </label>
              <input
                id="lastName"
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full border text-black border-gray-300 rounded-md p-2"
                placeholder="الاسم الأخير"
              />
            </div>
          </div>

          <div>
            <label
              className="block mb-1 text-gray-600 font-semibold"
              htmlFor="email"
            >
              البريد الإلكتروني
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-black border border-gray-300 rounded-md p-2"
              placeholder="example@mail.com"
            />
          </div>

          <div>
            <label
              className="block mb-1 text-gray-600 font-semibold"
              htmlFor="countrySelect"
            >
              البلد
            </label>
            {loading ? (
              <p>جاري تحميل الدول...</p>
            ) : (
              <select
                id="countrySelect"
                className="w-full border border-gray-300 text-gray-600 rounded-md p-2"
                value={selectedCountryCode}
                onChange={handleCountryChange}
                required
              >
                {countries.map((c) => (
                  <option key={c.cca2} value={c.cca2}>
                    {c.name}
                  </option>
                ))}
              </select>
            )}
          </div>

          <div>
            <label
              className="block mb-1 text-gray-600 font-semibold"
              htmlFor="phone"
            >
              رقم الهاتف
            </label>
            <PhoneInput
              country={selectedCountryCode}
              value={phone}
              onChange={setPhone}
              inputClass="!border !bg-white !text-gray-700 !border-gray-300 !rounded-full !w-full !h-10 !py-2 !px-4"
              containerClass="w-full"
              inputProps={{
                name: "phone",
                required: true,
              }}
            />
          </div>

          <div>
            <label
              className="block mb-1 text-gray-600 font-semibold"
              htmlFor="message"
            >
              الرسالة
            </label>
            <textarea
              id="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              placeholder="اكتب رسالتك هنا..."
              className="w-full text-black border border-gray-300 rounded-md p-3 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#153d3e]  text-white py-3 rounded-xl hover:bg-[#1e4a4a] transition"
          >
        
            {emailLoading ? "جاري الارسال..." : "ارسال الطلب"} 
            
         
          </button>
        </form>
      </div>
    </>
  );
};

export default page;
