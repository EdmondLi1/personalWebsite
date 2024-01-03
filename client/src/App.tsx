import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* think of the home page as the ones with this... maybe make it a route */}
        <main className='h-[100vh]'>
          <Routes>
              {/* make a nav bar and maybe a side bar */}
              <Route path="/" element={<MainPage />} />
              {/* <Route path="/blog" element={Blog} /> */}
          </Routes> 
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
