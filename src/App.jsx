import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { MainHeader } from "./components/MainHeader";
import { Navbar } from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent)] pointer-events-none"></div>
  {/* Grid Background */}
  {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div> */}

  {/* Radial Gradient */}
  {/* <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-[1000px] h-[1000px] bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
  </div> */}

  {/* Content (Ensure it's above the background) */}

    <Navbar />
    <MainHeader />
    <Technologies/>
    <Projects/>
    <Experience/>
    <Education/>
    <Contact/>

</div>

  );
}

export default App;

