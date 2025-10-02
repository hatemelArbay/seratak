// "use client";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { useParams } from "next/navigation";
// import axios from "axios";

// const Page = () => {
//   const [blog, setBlog] = useState(null);
//   const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
//   const { id } = useParams();

//   useEffect(() => {
//     if (!id) return;

//     const fetchBlog = async () => {
//       try {
//         const response = await axios.get(`${baseUrl}/clientBlog/getBlogById/${id}`);
//         setBlog(response.data.blog);
//       } catch (err) {
//         console.error("Error fetching blog:", err);
//       }
//     };

//     fetchBlog();
//   }, [id]);

//   if (!blog) return <p>Loading...</p>; 

//   return (
//     <div className="min-h-screen bg-gray-50 font-tajawal p-6">
//       <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-t-orange-200 shadow p-6">
//         <Link href="/blogs">
//           <span className="text-gray-500 text-lg animate-pulse">
//             &larr; العودة للمقالات
//           </span>
//         </Link>

//         <h1 className="text-2xl text-black font-bold mb-4 mt-2">
//           {blog.title}
//         </h1>
//        <div className="text-gray-700 leading-loose"
//      dangerouslySetInnerHTML={{ __html: blog.body }}>
// </div>

//       </div>
//     </div>
//   );
// };

// export default Page;

// app/blog/[id]/page.js
// app/blog/[id]/page.js
import Link from "next/link";

// This tells Next.js which blog pages to pre-render at build time
export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/clientBlog/getBlogs`);
  const blogs = await res.json();

  // Return an array of objects with the 'id' key matching [id] in the filename
  return blogs.map((blog) => ({
    id: blog._id,
  }));
}

// Server component for static export
export default async function Page({ params }) {
  const { id } = params;

  // Fetch the blog data at build time
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/clientBlog/getBlogById/${id}`);
  const data = await res.json();
  const blog = data.blog;

  if (!blog) return <p className="text-center mt-10">Blog not found</p>;

  return (
    <div className="min-h-screen bg-gray-50 font-tajawal p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-t-orange-200 shadow p-6">
        <Link href="/blogs">
          <span className="text-gray-500 text-lg animate-pulse">
            &larr; العودة للمقالات
          </span>
        </Link>

        <h1 className="text-2xl text-black font-bold mb-4 mt-2">
          {blog.title}
        </h1>

        <div
          className="text-gray-700 leading-loose"
          dangerouslySetInnerHTML={{ __html: blog.body }}
        />
      </div>
    </div>
  );
}
