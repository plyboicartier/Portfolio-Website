import Home from './Home';
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import HiTech from './HiTech'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/hitech-demo' element={<HiTech />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
