import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


function App() {
  return (
    
    <div className="App">
      <Navbar />
      {/* think of the home page as the ones with this... maybe make it a route */}
      <main>

      </main>
      <Router>
        {/* make a nav bar and maybe a side bar */}
        {/* <Route path="/" component={Home} />
        <Route path="/" component={Home} />
        <Route path="/" component={Home} /> */}
      </Router>
      <Footer />
    </div>
  )
}

export default App;
