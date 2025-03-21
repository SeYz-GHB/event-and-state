import Carousel from "./components/Carousel";
import imagesData from "./data/imagesData";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Carousel images={imagesData} />
    </div>
  );
}

export default App;