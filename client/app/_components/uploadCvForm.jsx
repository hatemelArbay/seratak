"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CVUploadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // 👉 Here you can integrate with your backend / email API
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative bg-gradient-to-br from-white/15 via-white/10 to-transparent 
                 backdrop-blur-2xl border border-white/20 
                 text-white p-10 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] 
                 max-w-2xl mx-auto mt-16"
    >
      <h3 className="text-2xl md:text-3xl font-extrabold mb-8 text-center">
        ✨ ارفع سيرتك الذاتية الآن
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm mb-2 font-semibold">الاسم</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-white/20 border border-white/30 text-white 
                       placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ffb366]"
            placeholder="اكتب اسمك الكامل"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm mb-2 font-semibold">البريد الإلكتروني</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-white/20 border border-white/30 text-white 
                       placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ffb366]"
            placeholder="example@email.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm mb-2 font-semibold">رقم الهاتف</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-white/20 border border-white/30 text-white 
                       placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ffb366]"
            placeholder="+20 123 456 789"
          />
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm mb-2 font-semibold">تحميل السيرة الذاتية</label>
          <input
            type="file"
            name="file"
            accept=".pdf,.doc,.docx"
            required
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-white/20 border border-dashed border-white/40 
                       text-gray-300 cursor-pointer file:mr-4 file:py-2 file:px-4 
                       file:rounded-md file:border-0 file:text-sm 
                       file:font-semibold file:bg-[#ffb366] file:text-[#153d3e] 
                       hover:file:bg-[#ff9933]"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center mt-8">
          <button
            type="submit"
            className="relative inline-block text-lg font-bold py-3 px-10 rounded-full 
                       bg-gradient-to-r from-[#ffb366] via-[#ff9933] to-[#ff8800] text-[#153d3e]
                       shadow-lg hover:shadow-orange-500/40
                       hover:scale-110 transition-all duration-500 ease-out overflow-hidden"
          >
            🚀 أرسل الآن
          </button>
        </div>
      </form>
    </motion.div>
  );
}
