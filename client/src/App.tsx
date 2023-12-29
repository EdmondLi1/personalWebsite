import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Home} />
        <Route path="/" component={Home} />
        <Route path="/" component={Home} />
      </Router>
    </div>
  )
}

export default App
