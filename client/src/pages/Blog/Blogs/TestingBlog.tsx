export const metadata = {
  title: 'TestingBlog',
  author: 'Edmond Li',
  date: 'June 27 2024',
  image: 'https://via.placeholder.com/300',
  content: 'This little blog is act as a test to see if I can actually design this webpage so its scable and easy to use. I hope this works out well!'
};

const Blog1: React.FC = () => (
  <div>
    <h1>{metadata.title}</h1>
    <p>{metadata.author} - {metadata.date}</p>
    <p>{metadata.content}</p>
  </div>
);

export default Blog1;
