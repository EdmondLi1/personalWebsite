import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import Resume from './components/Resume/Resume';
import BlogPage from './pages/Blog/BlogPage';
import BlogDetail from './pages/Blog/BlogDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className='bg-body-color'>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:title" element={<BlogDetail />} />
          </Routes> 
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
