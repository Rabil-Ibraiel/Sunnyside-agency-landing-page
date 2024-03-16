import Image from "next/image";
import Link from "next/link";

const Graphic = () => {
  return (
    <section className="h-screen w-screen flex flex-col-reverse md:flex-row justify-between items-center">
      {/* IMAGE container */}
      <div className="relative h-1/2 w-screen  md:h-screen  md:w-1/2">
        <Image src="/desktop/image-graphic-design.jpg" alt="White egg" fill />
        <div className="absolute left-[50%] translate-x-[-50%] bottom-0 text-center">
          <h3 className="text-2xl text-green-950 font-bold tracking-wider">
            Graphic design
          </h3>
          <p className="text-sm tracking-tight mt-4 mb-5 w-screen px-8 md:w-fit md:px-0 text-green-900 opacity-85 ">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </div>

      {/* IMAGE container */}
      <div className="relative h-1/2 w-screen  md:h-screen  md:w-1/2">
        <Image src="/desktop/image-photography.jpg" alt="White egg" fill />
        <div className="absolute left-[50%] translate-x-[-50%] bottom-0 text-center">
          <h3 className="text-2xl text-slate-950 font-bold tracking-wider">
            Photography
          </h3>
          <p className="text-sm tracking-tight mt-4 mb-5 w-screen px-8 md:w-fit md:px-0 text-slate-900 opacity-85">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Graphic;
