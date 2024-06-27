import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogPreview from '../../components/Blog/BlogPreview';
import SearchBar from '../../components/Blog/SearchBar';
import { Blog, BlogModule, BlogWithComponent } from '../../components/Blog/BlogTypes';
import './BlogPage.css';

const loadBlogs = async (): Promise<BlogWithComponent[]> => {
    const modules = import.meta.glob<BlogModule>('./Blogs/*.tsx');
    const blogs: BlogWithComponent[] = [];

    for (const path in modules) {
        const module: BlogModule = await modules[path]();
        blogs.push({ ...module.metadata, component: module.default });
    }

    return blogs;
};

const BlogPage: React.FC = () => {
    const [blogs, setBlogs] = useState<BlogWithComponent[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlogs = async () => {
        const loadedBlogs = await loadBlogs();
        setBlogs(loadedBlogs);
        };

        fetchBlogs();
    }, []);

    const filteredBlogs = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleBlogClick = (blog: BlogWithComponent) => {
        navigate(`/blog/${blog.title.replace(/\s+/g, '-').toLowerCase()}`, {
        state: { title: blog.title, author: blog.author, date: blog.date, image: blog.image },
        });
    };

    return (
        <section className="blogpage section" id="blogpage">
            <h1 className="section__title text-2xl font-semibold"> Edmond's Blogs! </h1>
            <p className="section__subtitle text-sm">
                Welcome to my little corner on the internet :) ! Here you can find all my latest thoughts, ideas, and events going on in my life.
            </p>
            <div className="blogpage__search">
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <button className="tag-button">Tags</button>
            </div>
            <div className="blogpage__container container mx-auto">
                <div className="blogpage__sections grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredBlogs.map((blog, index) => (
                        <BlogPreview key={index} blog={blog} onClick={() => handleBlogClick(blog)} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPage;
