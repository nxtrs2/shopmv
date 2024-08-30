"use client";
import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  // Define the props for your component here
}

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

const ProductImages: React.FC<ProductImagesProps> = (props) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-start gap-4 mt-8">
        {images.map((img, i) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8"
            key={img.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url}
              alt=""
              fill
              sizes="20vw"
              className="object-cover rounded-md cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
