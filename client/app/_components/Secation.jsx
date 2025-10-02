import React from "react";
import Image from "next/image";
const Secation = () => {
  return (
    <>
      <div className="min-h-screen font-tajawal flex flex-col md:flex-row items-center justify-center px-4 md:px-16 py-12 bg-white">
        {/* النص */}
        <div className="w-full md:w-1/2 text-center">
        <h1 className="text-5xl font-bold w-full max-w-full text-shadow-lg text-orange-300 mb-4 break-words">
  ثقة راسخة في السوق السعودي والخليجي
</h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            بفضل خبرتنا الواسعة وفهمنا العميق لمتطلبات سوق العمل، نُعد الخيار
            المفضل لدى نخبة من خبراء التوظيف في مختلف المجالات داخل السوق
            السعودي والخليجي.
          </p>
        </div>
        {/* <div className="grid grid-cols-3 grid-rows-2 w-full md:w-1/2 mb-10 md:mb-0">
          <div className="col-span-1 row-span-1">
        <img
  src="/images/person9.png"
  alt="شخص 1"
        className="rounded-full border -mb-8 border-[#153d3e] border-dashed shadow-2xl -mr-6 object-fit sm:h-48 w-48"
/>

          </div>
          <div className="col-span-1 row-span-1"></div>
          <div className="col-span-1 row-span-1">
      <img
        src="/images/fakar.png"
        alt="شخص 2"
        className="rounded-full border -mb-8 border-[#153d3e] border-dashed shadow-2xl -mr-6 object-fit sm:h-48 w-48"
      />

          </div>

          <div className="col-span-1 row-span-1"></div>
          <div className="col-span-1 row-span-1">
<img
  src="/images/dayra.jpg"
  alt="صورة وسط"
        className="rounded-full border -mb-8 border-[#153d3e] border-dashed shadow-2xl -mr-6 object-fit sm:h-48 w-48"
/>

          </div>
          <div className="col-span-1 row-span-1"></div>

        
          <div className="col-span-1 row-span-1">
<img
  src="/images/prefect.png"
  alt="شخص 3"
        className="rounded-full border -mb-8 border-[#153d3e] border-dashed shadow-2xl -mr-6 object-fit sm:h-48 w-48"
/>

          </div>
          <div className="col-span-1 row-span-1"></div>
          <div className="col-span-1 row-span-1">
<img
  src="/images/pksa-removebg-preview.png"
  alt="pksa"
        className="rounded-full border -mb-8 border-[#153d3e] border-dashed shadow-2xl -mr-6 object-fit sm:h-48 w-48"
/>

          </div>
        </div> */}
 <div className="grid grid-cols-3 grid-rows-2 w-full mt-5 md:w-1/2 mb-10 md:mb-0">
  {/* أعلى الصور */}
  <div className="col-span-1 row-span-1 flex justify-center">
    <img
      src="/images/person9.png"
      alt="شخص 1"
      className="rounded-full border -mb-8 border-[#153d3e] border-dashed shadow-2xl object-cover 
                 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
    />
  </div>
  <div className="col-span-1 row-span-1"></div>
  <div className="col-span-1 row-span-1 flex justify-center">
    <img
      src="/images/fakar.png"
      alt="شخص 2"
      className="rounded-full border -mb-8 border-[#153d3e] border-dashed shadow-2xl object-cover 
                 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
    />
  </div>

  {/* الصورة الوسطى */}
  <div className="col-span-1 row-span-1"></div>
  <div className="col-span-1 row-span-1 flex justify-center">
    <img
      src="/images/dayra.jpg"
      alt="صورة وسط"
      className="rounded-full border border-[#153d3e] border-dashed shadow-2xl object-cover 
                 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60"
    />
  </div>
  <div className="col-span-1 row-span-1"></div>

  {/* أسفل الصور */}
  <div className="col-span-1 row-span-1 flex justify-center">
    <img
      src="/images/prefect.png"
      alt="شخص 3"
      className="rounded-full border border-[#153d3e] border-dashed shadow-2xl object-cover 
                 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
    />
  </div>
  <div className="col-span-1 row-span-1"></div>
  <div className="col-span-1 row-span-1 flex justify-center">
    <img
      src="/images/pksa-removebg-preview.png"
      alt="pksa"
      className="rounded-full border border-[#153d3e] border-dashed shadow-2xl object-cover 
                 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
    />
  </div>
</div>


      </div>
    </>
  );
};

export default Secation;
