import { useState } from "react";
import products from "./image";
import { BiImage } from "react-icons/bi";

const App = () => {
  /* Product selection logic start */
  const [selectedImages, setSelectedImages] = useState([]);

  const toggleImageSelection = (product) => {
    if (selectedImages.includes(product)) {
      setSelectedImages(selectedImages.filter((img) => img !== product));
    } else {
      setSelectedImages([...selectedImages, product]);
    }
  };
  /* Product selection logic end */

  /* Product Drag and Drop logic start */
  const [galleryProducts, setGalleryProducts] = useState(products);
  const [dragImage, setDragImage] = useState(null);

  const handleDragStart = (products) => {
    setDragImage(products);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDropProduct = (dropIndex) => {
    if (dragImage) {
      const updatedProducts = galleryProducts.filter(
        (product) => product.id !== dragImage.id
      );
      updatedProducts.splice(dropIndex, 0, dragImage);
      setGalleryProducts(updatedProducts);
      setDragImage(null);
    }
  };
  /* Product selection logic end */

  /* delete selected Product start */
  const deleteProduct = () => {
    const updatedProduct = galleryProducts.filter(
      (image) => !selectedImages.some((selected) => selected.id === image.id)
    );
    setGalleryProducts(updatedProduct);
    setSelectedImages([]);
  };
  /* delete selected Product end */

  /* Upload your image logic start */
  const handleFileChange = (e) => {
    const uploadedFiles = e.target.files;

    const newImages = Array.from(uploadedFiles).map((file, index) => {
      const id = galleryProducts.length + index + 1;
      const imageURL = URL.createObjectURL(file);

      return { id, imageURL };
    });

    setGalleryProducts([...galleryProducts, ...newImages]);
  };
  /* Upload your image logic end */

  return (
    <section>
      <div className="container mx-auto py-10 px-4">
        {/* Wrapping div start */}
        <div className="bg-[#F7F7F7] p-2">
          {/* header div start */}
          <div className="flex justify-between items-center bg-white py-3 px-5 rounded-t-md">
            <div>
              {selectedImages.length >= 1 ? (
                <label
                  htmlFor="Selection"
                  className="font-bold text-xs sm:text-base md:text-lg lg:text-2xl">
                  <input className="w-5 h-5" defaultChecked type="checkbox" />
                  {" " + selectedImages.length} File Selected
                </label>
              ) : (
                <h3 className="text-xl font-bold">Gallery</h3>
              )}
            </div>
            {/* delete files button start */}
            <button
              onClick={deleteProduct}
              className={`${
                selectedImages.length >= 1 ? "block" : "hidden"
              } text-red-500 font-semibold text-xs sm:text-base md:text-lg lg:text-2xl hover:underline`}>
              {selectedImages.length > 1 ? "Delete files" : "Delete file"}
            </button>
            {/* delete files button end */}
          </div>
          {/* header div end */}

          {/* hr line start */}
          <hr className="bg-gray-400 w-full h-px" />
          {/* hr line end */}

          {/* Images div start */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 bg-white py-3 px-5 rounded-b-md [&>*:first-child]:row-span-2 [&>*:first-child]:col-span-2">
            {/* image */}
            {galleryProducts.map((product, index) => {
              return (
                <div
                  key={index}
                  draggable
                  index={index}
                  onDragStart={() => handleDragStart(product)}
                  onDragOver={handleDragOver}
                  onDrop={() => handleDropProduct(index)}>
                  <div
                    className={`relative ${
                      selectedImages.find((photo) => photo.id === product.id)
                        ? "[&>input]:block opacity-40"
                        : "[&>input]:hidden"
                    } [&>input]:hover:block [&>img]:hover:opacity-30 rounded-md bg-gray-700`}>
                    <img
                      className="rounded-md border border-gray-400 cursor-move"
                      src={product.imageURL}
                      alt="Blue colour Headphone image"
                    />
                    <input
                      type="checkbox"
                      className="w-6 h-6 absolute top-2 left-2"
                      checked={selectedImages.includes(product)}
                      onChange={() => toggleImageSelection(product)}
                    />
                  </div>
                </div>
              );
            })}
            {/* image */}

            {/* file upload input start*/}
            <div>
              <div className="relative border-2 border-dashed rounded-md p-4 hover:bg-gray-50 transition-colors ease-linear h-full">
                <input
                  type="file"
                  multiple
                  className="absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer"
                  title="Upload image to the gallery..."
                  onChange={handleFileChange}
                />
                <div className="h-full w-full flex flex-col justify-center items-center gap-4">
                  <BiImage />
                  <span className="min-w-max text-xs sm:text-base md:text-lg lg:text-2xl">
                    Add Images
                  </span>
                </div>
              </div>
            </div>
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
