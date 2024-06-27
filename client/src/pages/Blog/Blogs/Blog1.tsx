export const metadata = {
  title: 'Blog1',
  author: 'Jane Doe',
  date: '10 Apr 2024',
  image: 'https://via.placeholder.com/300',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.'
};

const Blog1: React.FC = () => (
  <div>
    <h1>{metadata.title}</h1>
    <p>{metadata.author} - {metadata.date}</p>
    <p>{metadata.content}</p>
  </div>
);

export default Blog1;
