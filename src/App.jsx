import { useState } from "react";
import products from "./image";

const App = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const toggleImageSelection = (product) => {
    if (selectedImages.includes(product)) {
      setSelectedImages(selectedImages.filter((img) => img !== product));
    } else {
      setSelectedImages([...selectedImages, product]);
    }
  };
  /*   const onDragStart = () => {};
  const onDragEnter = () => {};
  const onDragEnd = () => {}; */
  return (
    <section>
      <div className="container mx-auto py-10 px-4">
        {/* Wrapping div start */}
        <div className="bg-[#F7F7F7] p-2">
          {/* header div start */}
          <div className="flex justify-between bg-white py-3 px-5 rounded-t-md">
            <div>
              {selectedImages.length >= 1 ? (
                <label htmlFor="Selection">
                  <input defaultChecked type="checkbox" />
                  {" " + selectedImages.length} File Selected
                </label>
              ) : (
                <h3 className="text-xl font-bold">Gallery</h3>
              )}
            </div>
            <div
              className={`${
                selectedImages.length >= 1 ? "block" : "hidden"
              } text-red-600 font-semibold`}>
              Delete files
            </div>
          </div>
          {/* header div end */}

          {/* hr line start */}
          <hr className="bg-gray-400 w-full h-px" />
          {/* hr line end */}

          {/* Images div start */}
          <div className="grid grid-cols-5 gap-5 bg-white py-3 px-5 rounded-b-md [&>*:first-child]:row-span-2 [&>*:first-child]:col-span-2">
            {/* image */}
            {products.map((product) => {
              return (
                <div key={product.id}>
                  <div
                    className={`relative ${
                      selectedImages.length >= 1
                        ? "[&>input]:block"
                        : "[&>input]:hidden"
                    } [&>input]:hover:block [&>img]:hover:opacity-30 rounded-md bg-gray-700`}>
                    <img
                      className="rounded-md border border-gray-400 cursor-move"
                      src={product.imageURL}
                      alt="Blue colour Headphone image"
                    />
                    <input
                      type="checkbox"
                      className="absolute top-2 left-2"
                      checked={selectedImages.includes(product)}
                      onChange={() => toggleImageSelection(product)}
                    />
                  </div>
                </div>
              );
            })}
            {/* image */}

            {/* file upload input start*/}
            <div>Upload your file</div>
            {/* file upload input end*/}
          </div>
          {/* Images div end */}
        </div>
        {/* Wrapping div end */}
      </div>
    </section>
  );
};

export default App;
