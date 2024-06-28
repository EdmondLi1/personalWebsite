import React from 'react';
import { BlogWithComponent } from './BlogTypes';

interface BlogPreviewProps {
  blog: BlogWithComponent;
  onClick: () => void;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ blog, onClick }) => (
  <div onClick={onClick} className="w-[350px] cursor-pointer overflow-hidden rounded-md bg-white shadow-md">
    <img src={blog.image} alt={blog.title} className="h-48 w-full object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-semibold">{blog.title}</h2>
      <p className="text-sm text-gray-500">by {blog.author} - {blog.date}</p>
      <p className="text-sm">{blog.content.substring(0, 100)}...</p>
    </div>
  </div>
);

export default BlogPreview;


