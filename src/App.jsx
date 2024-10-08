import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home.jsx';
import Inside from './Inside.jsx'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Inside />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;