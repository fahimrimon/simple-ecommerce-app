import Announce from "./components/Announce";
import Products from "./components/Product/Products";
import Slider from "./components/Slider/Slider";
import Navbar from "./Shared/Navbar";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Footer from "./Shared/Footer/Footer";
import Categories from "./components/Category/Categories";

function App() {
  return (
    <div>
      <Announce></Announce>
      <Navbar></Navbar>
      <Slider></Slider>
      <Categories></Categories>
      <Products></Products>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  );
}

export default App;
