import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import Gallery from "./components/gallery/Gallery";
import Footer from "./components/footer/Footer";
import Floactingcat from "./components/Floatingcat";

const App = () => {
  return <div>
          <Floactingcat></Floactingcat>
          <Intro></Intro>
          <About></About>
          <Gallery></Gallery>
          <Footer></Footer>
         </div>;
};

export default App;