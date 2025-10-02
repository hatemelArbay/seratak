"use client";
import Image from "next/image";

const BlogCard = ({ blog }) => {
    return (
    
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden cursor-pointer">

      <div className="overflow-hidden">
    <img 
  src={blog.imageUrl} 
  alt={blog.title} 
  className="w-full h-52 object-cover transform hover:scale-105 transition duration-500" 
/>

      </div>

  
      <div className="p-6 text-center min-h-[12.5em] overflow-hidden text-ellipsis ">
        
        <h2 className="text-2xl font-bold text-gray-800 mb-2 hover:text-orange-600 transition">
       {blog.title}
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-6">
        {blog.excerpt}
        </p>
      </div>
    </div>

    );
}
export default BlogCard;