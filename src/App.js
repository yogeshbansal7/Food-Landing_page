import './App.css';
import Home from "./components/Home";
import About from './components/About';
import Work from './components/Work';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonials />
    </div>
  );
}

export default App;
