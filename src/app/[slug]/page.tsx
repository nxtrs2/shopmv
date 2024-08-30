import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMAGE */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
          consectetur purus. Donec euismod, nunc non fermentum luctus, nunc
          sapien gravida est, ac tempus felis nunc nec nisi. Nullam in
          tincidunt.
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">MVR22.00</h3>
          <h2 className="text-2xl font-medium">MVR20.00</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
            consectetur purus. Donec euismod, nunc non fermentum luctus, nunc
            sapien gravida est, ac tempus felis nunc nec nisi. Nullam in
            tincidunt.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Another Title</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
            consectetur purus. Donec euismod, nunc non fermentum luctus, nunc
            sapien gravida est, ac tempus felis nunc nec nisi. Nullam in
            tincidunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
