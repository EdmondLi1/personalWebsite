import { useLocation } from 'react-router-dom';

const BlogContent = () => {
  const location = useLocation();
  const { blog } = location.state || {};

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const BlogComponent = blog.component;

  return (
    <div className="blog-content">
      <BlogComponent />
    </div>
  );
};

export default BlogContent;
