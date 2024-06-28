import React from 'react';
import { useLocation } from 'react-router-dom';

const BlogDetail: React.FC = () => {
  const location = useLocation();
  const { title, author, date } = location.state as { title: string, author: string, date: string };

  const [BlogComponent, setBlogComponent] = React.useState<React.ComponentType | null>(null);

  React.useEffect(() => {
    const loadComponent = async () => {
      try {
        const module = await import(`./Blogs/${title.replace(/\s+/g, '-')}.tsx`);
        setBlogComponent(() => module.default);
      } catch (error) {
        console.error('Error loading blog component:', error);
      }
    };

    loadComponent();
  }, [title]);

  return (
    <div>
      <h1>{title}</h1>
      <p>{author} - {date}</p>
      {BlogComponent && <BlogComponent />}
    </div>
  );
};

export default BlogDetail;
