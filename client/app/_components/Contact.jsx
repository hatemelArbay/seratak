"use client";

import { useForm, ValidationError } from "@formspree/react";
import React, { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import WorldFlag from "react-world-flags";
import axios from "axios";
import emailjs from "emailjs-com";

// Custom styles for select input
const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "white",
    border: "1px solid #ccc",
    boxShadow: "none",
    padding: "1px",
    width: "18rem",
    right: "30px",
    borderRadius: "50px",
    "&:hover": {
      borderColor: "#aaa",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
  }),
  input: (provided) => ({
    ...provided,
    color: "white",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "gray",
    font: "bold",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "white",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#fff" : "white",
    color: "black",
    cursor: "pointer",
  }),
};

const Contact = () => {
  const [state, handleSubmit] = useForm("mpwadaeg");
  const [phone, setPhone] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
    const [loading, setLoading] = useState(false);
  
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleChange = (value) => {
    setPhone(value);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get("https://restcountries.com/v3.1/all?fields=name,cca2");
      const countryData = response.data.map((country) => ({
        value: country.cca2,
        label: country.name.common,
        flag: country.cca2.toLowerCase(),
      }));
      setCountries(countryData);
    };

    fetchCountries();
  }, []);

  const handleeChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  const submitForm =async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log({
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      phone,
      country: selectedCountry ? selectedCountry.label : "Not selected",
      message: messageRef.current.value,
    });

    await sendEmailToCustomer();

    await sendEmailToAdmin();
  alert("تم إرسال النموذج بنجاح!");
    handleSubmit(e);
    setLoading(false);
  };
  const sendEmailToCustomer = async () => {

    emailjs
      .send(
        "service_3a0temj",   
        "template_4u730bf", 
        {
          ToEmail: emailRef.current.value,
          name :  firstNameRef.current.value + " " + lastNameRef.current.value,
          message: messageRef.current.value,
        } ,
        "faVvpQ1ZIyAvDuJpf"    
      )
      .then(
        (result) => {
       
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("Something went wrong ❌ Please try again.");
        }
      );
  };

    const sendEmailToAdmin =async  (e) => {


 const emailSubject = "طلب تواصل جديد من خلال نموذج الاتصال";
   const emailData = `
السيد/ مسؤول النظام

: نود إبلاغكم بأن مستخدماً جديداً قد قام بتقديم طلب "تواصل معنا" من خلال الموقع، وذلك وفقاً للبيانات التالية


${firstNameRef.current.value + " " + lastNameRef.current.value} : الاسم
${emailRef.current.value} : البريد الإلكتروني
${phone} : رقم الهاتف
${selectedCountry ? selectedCountry.label : "لم يتم اختيار الدولة"} : الدولة

: الرسالة
${messageRef.current.value}

.نرجو منكم متابعة الطلب والتواصل مع المستخدم في أقرب وقت ممكن

،وتفضلوا بقبول فائق الاحترام
فريق الدعم الفني
`;

    
    emailjs
      .send(
        "service_3a0temj",   
        "template_40qk0hr", 
        {
          subject: emailSubject,
          message: emailData,
      
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
  return (
    // <section id="contact" className="contact py-30 px-6">
    //   <h1 className="text-3xl font-semibold text-center font-tajawal text-[#fff] w-fit py-4 mx-auto px-6 mt-10 rounded-tl-2xl border border-dashed border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl bg-orange-300 mb-16">
    //     تواصل معنا
    //   </h1>

    //   <div className="flex flex-col md:flex-row justify-between items-center gap-12">
    //     {/* FORM */}
    //     <form onSubmit={submitForm} className="w-full md:w-1/2 bg-gray-50 shadow-lg rounded-lg p-6 space-y-6">
    //       {/* Name Inputs */}
    //       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    //         <div>
    //           <input
    //             required
    //             ref={firstNameRef}
    //             type="text"
    //             placeholder="⫷ الاسم الأول"
    //             name="firstName"
    //             className="w-full p-2 border rounded-full text-gray-700 bg-white border-gray-300 mt-2"
    //           />
    //           <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
    //         </div>

    //         <div>
    //           <input
    //             required
    //             ref={lastNameRef}
    //             type="text"
    //             placeholder="⫷ الاسم الأخير"
    //             name="lastName"
    //             className="w-full p-2 border rounded-full text-gray-700 bg-white border-gray-300 mt-2"
    //           />
    //           <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
    //         </div>
    //       </div>

    //       {/* Phone & Country */}
    //       <div className="md:flex space-y-11 my-6 max-sm:gap-56 max-lg:gap-0">

    //         <PhoneInput
    //           country={"eg"}
    //           value={phone}
    //           onChange={handleChange}
    //           inputClass="!border !bg-white !text-gray-700 !border-gray-300 !rounded-full !w-full !h-10 !py-2 !px-4"
    //           containerClass="w-full"
    //         />
    //         <Select
    //           required
    //           options={countries}
    //           value={selectedCountry}
    //           styles={customStyles}
    //           onChange={handleeChange}
    //           className="w-full"
    //           classNamePrefix="react-select"
    //           placeholder="الدولة"
    //           getOptionLabel={(e) => (
    //             <div className="flex items-center">
    //               <WorldFlag code={e.flag} style={{ width: 15, height: 16, marginRight: 10 }} />
    //               {e.label}
    //             </div>
    //           )}
    //         />
    //       </div>
          

    //       {/* Email */}
    //       <div>
    //         <input
    //           required
    //           ref={emailRef}
    //           type="email"
    //           placeholder="عنوان البريد الإلكتروني"
    //           name="email"
    //           className="w-full p-2 border border-gray-300 text-gray-700 bg-white rounded-full mt-2"
    //         />
    //         <ValidationError prefix="Email" field="email" errors={state.errors} />
    //       </div>

    //       {/* Message */}
    //       <div>
    //         <textarea
    //           required
    //           ref={messageRef}
    //           name="message"
    //           placeholder="اكتب رسالتك"
    //           className="w-full p-3 border border-gray-300 text-gray-700 rounded-lg bg-white mt-2"
    //           rows={5}
    //         ></textarea>
    //         <ValidationError prefix="Message" field="message" errors={state.errors} />
    //       </div>

    //       {/* Submit Button */}
    //       <button
    //         type="submit"
    //         disabled={state.submitting}
    //         className="w-full bg-[#153d3e] text-white py-2 rounded-full hover:bg-[#1b4f50] transition duration-300"
    //       >
    //            {loading ? "جاري الارسال..." : "ارسال "} 
    //       </button>

    //       {/* Success Message
    //       {state.succeeded && (
    //         <p className="flex items-center mt-4 text-green-600">
    //           <Lottie className="w-10 mr-2" loop={false} animationData={doneAnimation} />
    //           لقد تم ارسال رسالتك بنجاح 🤗
    //         </p>
    //       )} */}
    //     </form>

    //     {/* IMAGE */}
    //     <div className="w-full md:w-1/2 flex justify-center">
    //       <img src="/images/Bakat.png" alt="Contact Us" className="max-md:hidden" />
    //     </div>
    //   </div>
    // </section>
    <section id="contact" className="contact py-20 px-6">
  <h1 className="text-3xl font-semibold text-center font-tajawal text-white w-fit py-4 mx-auto px-6 mt-10 rounded-tl-2xl border border-dashed border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl bg-orange-300 mb-16">
    تواصل معنا
  </h1>

  <div className="flex flex-col md:flex-row justify-between items-start gap-12">
   
    {/* FORM */}
    <form
      onSubmit={submitForm}
      className="w-full md:w-1/2 bg-gray-50 shadow-lg rounded-2xl p-8 space-y-6"
    >
      {/* Name Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          required
          ref={firstNameRef}
          type="text"
          placeholder="⫷ الاسم الأول"
          name="firstName"
          className="w-full p-3 border rounded-full text-gray-700 bg-white border-gray-300"
        />
        <input
          required
          ref={lastNameRef}
          type="text"
          placeholder="⫷ الاسم الأخير"
          name="lastName"
          className="w-full p-3 border rounded-full text-gray-700 bg-white border-gray-300"
        />
      </div>

      {/* Phone & Country */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <PhoneInput
          country={"eg"}
          value={phone}
          onChange={handleChange}
          inputClass="!border !bg-white !text-gray-700 !border-gray-300 !rounded-full !w-full !h-12 !py-2 !px-4"
          containerClass="w-full"
        />
        <Select
          required
          options={countries}
          value={selectedCountry}
          styles={customStyles}
          onChange={handleeChange}
          className="w-full"
          classNamePrefix="react-select"
          placeholder="الدولة"
          getOptionLabel={(e) => (
            <div className="flex items-center">
              <WorldFlag code={e.flag} style={{ width: 18, height: 18, marginRight: 8 }} />
              {e.label}
            </div>
          )}
        />
      </div>

      {/* Email */}
      <input
        required
        ref={emailRef}
        type="email"
        placeholder="عنوان البريد الإلكتروني"
        name="email"
        className="w-full p-3 border border-gray-300 text-gray-700 bg-white rounded-full"
      />

      {/* Message */}
      <textarea
        required
        ref={messageRef}
        name="message"
        placeholder="اكتب رسالتك"
        className="w-full p-3 border border-gray-300 text-gray-700 rounded-2xl bg-white"
        rows={5}
      ></textarea>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-[#153d3e] text-white py-3 rounded-full text-lg font-semibold hover:bg-[#1b4f50] transition duration-300"
      >
        {loading ? "جاري الارسال..." : "ارسال "}
      </button>
    </form>

    {/* IMAGE */}
    <div className="w-full md:w-1/2 flex justify-center hidden sm:block">
      <img
        src="/images/Bakat.png"
        alt="Contact Us"
        className="w-3/4 md:w-full max-md:mt-6"
      />
    </div>
  </div>
</section>

  );
};

export default Contact;
