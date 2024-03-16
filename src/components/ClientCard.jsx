import Image from "next/image";

const ClientCard = ({ key, info, index }) => {
  return (
    <div
      key={key}
      className={`text-center flex flex-col items-center justify-between min-h-[350px] min-w-[250px] py-4 px-2 md:max-w-[250px] rounded-xl ${
        index == 1 && "bg-green-100"
      }`}
    >
      {/* IMAGE container */}
      <div className="relative h-16 w-16 overflow-hidden rounded-full mb-4">
        <Image src={`/${info.img}`} alt="" fill />
      </div>

      {/* TEXT container */}
      <div>
        <p>{info.body}</p>
      </div>

      {/* INFO container */}
      <div className="mt-6">
        <h4 className="font-bold mb-2">{info.name}</h4>
        <p>{info.position}</p>
      </div>
    </div>
  );
};

export default ClientCard;
