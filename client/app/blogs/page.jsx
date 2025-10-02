"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useState,useEffect } from "react";
import BlogCard  from "../_components/blogCard";
const page = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
  const [blogs,setBlogs]=useState([]);
useEffect(()=>{
const fetchBlogs = async()=>{
  const response = await axios.get(`${baseUrl}/clientBlog/getBlogs`);
  setBlogs(response.data);
}
fetchBlogs();
},[])
  
  return (
    <>
      <div className="min-h-screen font-tajawal bg-gray-100 p-8">
        <h1 className="text-3xl font-semibold text-center font-tajawal  text-[#fff] w-fit py-4 mx-auto px-6 mt-20  rounded-tl-2xl border border-dashed  border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl  bg-orange-300 mb-16">
          المقالات
        </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {blogs.map((blog) => (
        <Link key={blog.id} href={`/blog/${blog._id}`}>
      <BlogCard key={blog._id} blog={blog} />
      </Link>
    ))}
  </div>



      </div>
    </>
  );
};

export default page;
