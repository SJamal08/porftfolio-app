import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { data } from "./data/data";

function App() {
  const infos = data;

  return (
    <div className="flex flex-col">
      <Navbar />
      <Home name={`${infos.firstname} ${infos.lastname}`} job={infos.job} />
      <About little={infos.littlePresentation} big={infos.BigPresentation} />
      <Skills skills={infos.skills} />
      <Work works={infos.work} />
      <Contact />
    </div>
  );
}

export default App;
