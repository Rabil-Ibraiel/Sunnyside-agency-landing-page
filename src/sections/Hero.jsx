import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen w-screen bg-base-blue overflow-hidden">
      {/* TEXT container */}
      <div className="absolute left-[50%] translate-x-[-50%] top-52 z-20">
        <h1 className="text-5xl uppercase text-white font-bold text-center w-screen">
          We are creatives
        </h1>
      </div>

      {/* ARROW container */}
      <div className="absolute h-16 w-16 left-[50%] translate-x-[-50%] top-80 z-20">
        <div className="realtive">
          <Image
            src={"/icon-arrow-down.svg"}
            alt="arrow down"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* IMAGE container for SM+ */}
      <div className="h-1/2 w-screen absolute bottom-0">
        <div className="relative h-full w-full">
          <Image
            src={"/desktop/image-header.png"}
            alt="Orange"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* IMAGE container for smaller than SM */}
      <div className="sm:hidden h-1/2 w-screen absolute bottom-0">
        <div className="relative h-full w-full">
          <Image
            src={"/desktop/image-header.png"}
            alt="Orange"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
