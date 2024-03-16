import Image from "next/image";
import Link from "next/link";

const Brand = () => {
  return (
    <section className="h-screen w-screen flex flex-col-reverse md:flex-row justify-between items-center">
      {/* TEXT Container */}
      <div className="h-1/2 w-screen  md:h-screen  md:w-1/2 overflow-hidden flex flex-col justify-center items-start px-6 gap-4 md:gap-8 sm:px-12 md:px-28">
        <h1 className="text-3xl sm:text-4xl font-bold">Transform your brand</h1>
        <p className="text-slate-500">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <Link href={"#"} className="btn relative z-20">
          Learn more
        </Link>
      </div>

      {/* IMAGE container */}
      <div className="relative bg-[#ffd302] h-1/2 w-screen  md:h-screen  md:w-1/2">
        <Image
          src="/desktop/image-transform.png"
          alt="White egg"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Brand;
