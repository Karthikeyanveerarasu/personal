
import Project from "./Components/Project";
import Skill from "./Components/Skill";
import Contact from './Components/Contact'
import Like from "./Components/Like";
import Footer from "./Components/Footer";
import AppBar from './Components/AppBar';

export default function App() {
  return (
    <div>
      <AppBar />   
       <Skill />
       <Project />
       <Contact />
       <Like />
       <Footer /> 
    </div>
  );
}
