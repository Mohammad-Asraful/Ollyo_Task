import products from "./image";

const App = () => {
  return (
    <section>
      <div className="container mx-auto py-10 px-4">
        {/* Wrapping div start */}
        <div className="bg-[#F7F7F7] p-2">
          {/* header div start */}
          <div className="flex justify-between bg-white py-3 px-5 rounded-t-md">
            <div>
              <input defaultChecked type="checkbox" /> 3 File Selected
            </div>
            <div className="text-red-600 font-semibold">Delete files</div>
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
                  <img
                    className="rounded-md border border-gray-400 cursor-move"
                    src={product.imageURL}
                    alt="Blue colour Headphone image"
                  />
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
