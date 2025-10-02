"use client";

import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { PiCrownSimpleFill } from "react-icons/pi";
import HeroSection from "../_components/HeroSection";
import { FaDiamond } from "react-icons/fa6";
import { GiSilverBullet } from "react-icons/gi";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { Commet } from "react-loading-indicators";

const Page = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
  const [bundles, setBundles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBundles = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${baseUrl}/clientBundle/getBundles`);
        if (response) {
          console.log(response.data.bundles );
          setBundles(response.data.bundles || []);
        }
      } catch (error) {
        console.error("Failed to fetch bundles:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBundles();
  }, []);

const handlePaymentButton = async (pkg) => {
  try {
    const response = await axios.post(`${baseUrl}/payment/create-payment-page`, {
      customer: {
        name: "John Doe",
        email: "john@example.com",
        phone: "0100000000",
        street1: "123 Main St",
        city: "Cairo",
        country: "EG"
      },
      service: {
        price: pkg.price,
        serviceTitle: pkg.title
      }
    });

    window.open(response.data.redirect_url, "_blank");

  } catch (error) {
    console.error("Failed to create payment page:", error);
    alert("Payment setup failed. Please try again.");
  }
};

  return (
    <>
      <div className="left-0 w-full h-1/6 bg-[#153d3e]"></div>
      <section id="packages" className="bg-gray-100 font-tajawal py-16 px-4">
        <h2 className="text-3xl font-bold text-center my-10 text-[#153d3e]">
          اختر الباقة الأنسب أو صمّم باقتك الخاصة!
        </h2>

        {loading && (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Commet
              className="justify-center"
              color="#153d3d"
              size="medium"
              text=""
              textColor="#1e1e1e"
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {bundles.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl hover:scale-105 shadow-2xl p-6 flex flex-col items-center border-t-4 ${pkg.color || ""} hover:shadow-xl transition`}
              style={{
                borderTopColor: pkg.color || "#ccc",
                borderTopWidth: "4px",
              }}
            >
              <div className="mb-4 text-4xl">{pkg.icon || <FaCheckCircle />}</div>

              <h3 className="text-xl font-bold mb-4 text-[#153d3e]">
                {pkg.title}
              </h3>
              <h3 className="text-2xl font-bold my-4 text-[#153d3e]">
                {pkg.price} <b className="text-orange-300">SAR</b>
              </h3>
              <ul className="text-gray-700 space-y-2 w-full text-right">
                {(pkg.features || []).map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <b className="text-orange-400 pl-1">✔</b>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
             <button
              onClick={()=>handlePaymentButton(pkg)}
                className="mt-6 bg-[#153d3e] text-white px-5 py-2 rounded-md hover:bg-[#1c4d4e] transition"
              >
                اشترك الآن
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 mx-auto bg-[#153d3e] text-white p-8 rounded-2xl text-center sm:w-96">
          <h3 className="text-2xl font-semibold mb-8">
            صمم باقاتك التي تناسبك الأن{" "}
          </h3>
          <Link
            href="/contact-us"
            className="bg-[#ffb366] text-[#153d3e] font-bold py-3 px-6 rounded-xl hover:bg-[#ff9933] transition-all"
          >
            اطلب سيرتك
          </Link>
        </div>
      </section>
    </>
  );
};

export default Page;
