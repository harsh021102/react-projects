import React from "react";
import ImageSlider from "./image carousel/ImageSlider";
function App() {
    return (
      <div className="bg-gradient-to-r from-sky-500 to-indigo-400 h-screen w-screen flex flex-col gap-4 justify-center items-center">
        <h1 className="text-4xl font-sans text-white font-900 ">Image Carousel</h1>
        <ImageSlider/>
      </div>
    );
}

export default App;
