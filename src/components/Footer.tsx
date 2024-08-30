import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT  */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">SHOPMV</div>
          </Link>
          <p>H.Some House, Maguge Nan Magu, Male', 20022, Maldives</p>
          <span className="font-semibold">email@email.com</span>
          <span className="font-semibold">+960 9222999</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
            <Image src="/youtube.png" alt="" width={16} height={16} />
            <Image src="/pinterest.png" alt="" width={16} height={16} />
          </div>
        </div>
        {/* CENTER  */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-start">
            <h1 className="font-medium text-lg pb-2">ABOUT US</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">About</Link>
              <Link href="/">Contact</Link>
              <Link href="/">Blog</Link>
              <Link href="/">FAQ</Link>
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <h1 className="font-medium text-lg pb-2">FROM OUR SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">New Arrivals</Link>
              <Link href="/">Accessories</Link>
              <Link href="/">Women</Link>
              <Link href="/">Kids</Link>
              <Link href="/">Men</Link>
              <Link href="/">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <h1 className="font-medium text-lg pb-2">NEED HELP?</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">Customer Service</Link>
              <Link href="/">My Account</Link>
            </div>
          </div>
        </div>
        {/* RIGHT  */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>
            Want to receive email about our upcoming products before anyone
            else?
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter your email"
              className="p-4 w-3/4"
            />
            <button className="bg-shopcolor1 w-1/4  text-white  ">JOIN</button>
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="text-gray-500">© 2021 SHOPMV. All Rights Reserved.</div>
        <div className="flex gap-8">
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms of Service</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
