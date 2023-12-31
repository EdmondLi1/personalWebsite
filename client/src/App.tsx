import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    
    <div>
      <Navbar />

      <Router>
        {/* make a nav bar and maybe a side bar */}
        {/* <Route path="/" component={Home} />
        <Route path="/" component={Home} />
        <Route path="/" component={Home} /> */}
      </Router>
    </div>
  )
}

export default App
