import About from "./components/About";
import Contact from "./components/Contact";
import Languages from "./components/Languages";
import Services from "./components/Services";

function App() {
  return (
    <div className=" max-w-[1140px] my-0 mx-auto">
      <About />
      <Languages />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
