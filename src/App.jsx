import { MainHeader } from "./components/MainHeader";
import { Navbar } from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
  {/* Grid Background */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

  {/* Radial Gradient */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-[1000px] h-[1000px] bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
  </div>

  {/* Content (Ensure it's above the background) */}
  <div className="relative z-10">
    <Navbar />
    <MainHeader />
    <Technologies/>
    <Projects/>
  </div>
</div>

  );
}

export default App;

