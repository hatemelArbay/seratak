import Link from "next/link";
import { FaCcVisa } from "react-icons/fa6";
import { RiMastercardLine } from "react-icons/ri";
import { GrPaypal } from "react-icons/gr";
import { FaCcApplePay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#153d3e] text-white py-10 px-4 font-tajawal">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & Description */}
<div className="flex flex-col max-md:items-center text-center md:items-start">
          <img
            src="/images/logo-removebg-preview.png"
            alt="Your Company Logo"
            className="mx-auto max-md:mx-0 mb-4 w-28 h-auto"
          />
          <p className="text-lg max-md:px-2">
            في سيرتك، نُحول خبراتك وإنجازاتك إلى سيرة ذاتية احترافية تُعبّر عنك
            بأفضل صورة
          </p>
        </div>

        {/* Page Links */}
        <div className="max-md:text-center">
          <h3 className="text-lg font-bold text-orange-200 mb-2">روابط مهمة</h3>
          <ul className="space-y-2 text-lg p-0">
            {[
              { name: "الصفحة الرئيسية", href: "/" },
              { name: "الخدمات", href: "/Services" },
              { name: "الباقات", href: "/price" },
              { name: "من نحن", href: "/about-us" },
              { name: "تواصل معنا", href: "/contact-us" },
              { name: "المقالات", href: "/blogs" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:underline text-white">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Address */}
        <div className="max-md:text-center">
          <h3 className="text-lg font-semibold text-orange-200 mb-2">العنوان</h3>
          <p className="text-lg">
            القاهرة: مدينة نصر - مكرم عبيد بجوار برج السحيلي
          </p>
        </div>

        {/* Payment Methods */}
        <div className="max-md:text-center">
          <h3 className="text-lg font-semibold text-orange-200 mb-2">وسائل الدفع</h3>
          <div className="flex justify-center max-md:justify-center md:justify-start gap-4 mt-4 flex-wrap">
            <FaCcVisa className="w-10 h-10" />
            <RiMastercardLine className="w-10 h-10" />
            <GrPaypal className="w-10 h-10" />
            <FaCcApplePay className="w-10 h-10" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-200 pt-4 text-center text-sm text-gray-100">
        © {new Date().getFullYear()} جميع الحقوق محفوظة - SEMO
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
        {[
          { name: "الشروط والأحكام", href: "/termsAndConditions" },
          { name: "سياسة الخصوصية", href: "/privacy" },
          { name: "سياسة الاسترجاع والاسترداد", href: "/refundPolicy" },
          { name: "سياسة الإلغاء", href: "/cancellationPolicy" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-white hover:underline"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
