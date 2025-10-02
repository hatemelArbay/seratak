"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaSnapchatGhost,
  FaWhatsapp,
} from "react-icons/fa";
// import insta from "/images/Insta.jpg";
import { FaSnapchat, FaTiktok, FaX, FaXTwitter } from "react-icons/fa6";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
export default function HeroSection() {
  const { ref, inView } = useInView({
    triggerOnce: false, // يعد مرة واحدة فقط
    threshold: 0.5, // لما نص العنصر يظهر
  });
  return (
    <section className="relative bg-[#153d3e] text-white overflow-hidden min-h-[90vh] pb-12 pt-24 px-6 md:px-16 lg:flex lg:items-center lg:justify-between">
      {/* Left Content */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-xl mt-20 order-1 lg:order-1"
      >
        <h1 className="text-4xl md:text-5xl font-tajawal font-bold leading-tight mb-6 text-center sm:text-right">
          خلّي سيرتك تتكلم عنك <br />
        </h1>

        <p className="text-gray-300 font-tajawal font-semibold text-lg mb-6 text-center sm:text-right">
          في سيرتك، نُحول خبراتك وإنجازاتك إلى سيرة ذاتية احترافية تُعبّر عنك
          بأفضل صورة
        </p>

        {/* <div className="flex items-center my-12 gap-8 mb-8"> */}
   <div className="flex flex-wrap justify-center items-center my-12 gap-6">
  <a
    href="#"
    className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-black rounded-full shadow transform transition-transform duration-300 hover:scale-105"
  >
    <FaTiktok className="text-white text-3xl md:text-4xl" />
  </a>

  <a
    href="#"
    className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-yellow-400 rounded-full shadow transform transition-transform duration-300 hover:scale-105"
  >
    <FaSnapchatGhost className="text-white text-3xl md:text-4xl" />
  </a>

  <a
    href="#"
    className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-black rounded-full shadow transform transition-transform duration-300 hover:scale-105"
  >
    <FaXTwitter className="text-white text-3xl md:text-4xl" />
  </a>

  <a
    href="#"
    className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-green-500 rounded-full shadow transform transition-transform duration-300 hover:scale-105"
  >
    <FaWhatsapp className="text-white text-2xl md:text-3xl" />
  </a>

  <a
    href="#"
    className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full shadow transform transition-transform duration-300 hover:scale-105"
  >
    <FaInstagram className="text-white text-2xl md:text-3xl" />
  </a>
       
</div>


        {/* <div
          ref={ref}
          className="flex gap-12 mt-12 font-tajawal text-sm text-gray-400"
        >
          <div>
            <p className="text-orange-400 mb-4 font-semibold text-xl">
              العملاء
            </p>
            <span className="text-gray-100 font-semibold text-2xl">
              {inView && <CountUp end={2400} duration={2} />}+
            </span>
          </div>
          <div>
            <p className="text-orange-400 mb-4 font-semibold text-xl">
              سنوات الخبرة
            </p>
            <span className="text-gray-100 mr-8 font-semibold text-2xl">
              {inView && <CountUp end={8} duration={2} />}+
            </span>
          </div>
          <div>
            <p className="text-orange-400 mb-4 font-semibold text-xl">
              الجنسيات
            </p>
            <span className="text-gray-100 mr-4 font-semibold text-2xl">
              {inView && <CountUp end={23} duration={2} />}+
            </span>
          </div>
        </div> */}

            <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="lg:mt-0 order-2 lg:order-2"
      >
        <img
          src="/images/Person-Hero-Seactaion.png"
          alt="Person"
          width="600"
          height="600"
          className="mx-auto lg:mx-0 md:mt-32 sm:hidden"
        />

      </motion.div>
   <div
          ref={ref}
          className="md:flex flex-wrap justify-center gap-12 mt-12 font-tajawal text-sm text-gray-400"
        >
          <div className="flex-1 mb-3 min-w-[120px] text-center">
            <p className="text-orange-400 font-semibold text-xl">العملاء</p>
            <span className="text-gray-100 font-semibold text-2xl">
              <span className="inline-block min-w-[4ch]">
                {inView && <CountUp end={2400} duration={2} separator="," />}
              </span>
              +
            </span>
          </div>
          <div className="flex-1 mb-3 min-w-[120px] text-center">
            <p className="text-orange-400 font-semibold text-xl">سنوات الخبرة</p>
            <span className="text-gray-100 font-semibold text-2xl">
              <span className="inline-block min-w-[2ch]">
                {inView && <CountUp end={8} duration={2} />}
              </span>
              +
            </span>
          </div>
          <div className="flex-1 mb-3 min-w-[120px] text-center">
            <p className="text-orange-400 font-semibold text-xl">الجنسيات</p>
            <span className="text-gray-100 font-semibold text-2xl">
              <span className="inline-block min-w-[2ch]">
                {inView && <CountUp end={23} duration={2} />}
              </span>
              +
            </span>
          </div>
        </div>

<motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative bg-gradient-to-br from-white/15 via-white/10 to-transparent 
                 backdrop-blur-2xl border border-white/20 
                 text-white p-12 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] 
                 text-center mt-2 max-w-3xl mx-auto"
    >
      {/* Heading */}
      <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-snug tracking-wide">
        أرسل{" "}
        <span className="text-[#ffb366] drop-shadow-md">سيرتك الذاتية</span> الآن
      </h3>

      {/* Subtext */}
      <p className="text-gray-300 text-lg mb-10">
        واحصل على{" "}
        <span className="text-[#ff9933] font-semibold">مراجعة مجانية</span> من خبرائنا
      </p>

      {/* CTA Button */}
      <Link
        href="/contact-us"
        className="relative inline-block text-lg md:text-xl font-bold py-4 px-14 rounded-full 
                   bg-gradient-to-r from-[#ffb366] via-[#ff9933] to-[#ff8800] text-[#153d3e]
                   shadow-lg hover:shadow-orange-500/40
                   hover:scale-110 transition-all duration-500 ease-out overflow-hidden"
      >
        ✨ اطلب مراجعة سيرتك الآن

        {/* Shine Effect */}
        <span className="absolute top-0 left-[-100%] w-full h-full bg-white/20 
                         skew-x-[-20deg] animate-[shine_3s_infinite]"></span>
      </Link>
    </motion.div>


      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="lg:mt-0 order-2 lg:order-2"
      >
        <img
          src="/images/Person-Hero-Seactaion.png"
          alt="Person"
          width="600"
          height="600"
          className="mx-auto lg:mx-0 hidden sm:block"
        />
      </motion.div>
    </section>
  );
}

