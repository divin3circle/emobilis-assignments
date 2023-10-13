// Date: 2021/8/8
// Creator: Lams  Sylus
// Description: App.jsx is the main component of the application. It is the root component of the application.

import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <h1 className="text-lg text-red-500 text-center">Hello Vite + React!</h1>
      <About />
      <Footer />
    </>
  );
}

export default App;
