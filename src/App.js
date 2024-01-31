import NavBar from "./Components/NavBar";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from "./Components/Banner";
import Skills from "./Components/Skills";
import Projects from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <div className="App"> 
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
};

export default App