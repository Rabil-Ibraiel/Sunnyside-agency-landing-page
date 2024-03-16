import ClientCard from "@/components/ClientCard";

const Client = () => {
  const clients = [
    {
      body: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
      name: "Emily R.",
      position: "Marketing Director",
      img: "image-emily.jpg",
    },
    {
      body: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
      name: "Thomas S. Chief",
      position: "Operating Officer",
      img: "image-thomas.jpg",
    },
    {
      body: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      name: "Jennie F.",
      position: "Business Owner ",
      img: "image-jennie.jpg",
    },
  ];

  return (
    <section className="h-fit py-24 w-screen px-12 md:px-24">
      <h2 className="text-4xl font-bold tracking-wide text-center mb-24">
        Client testimonials
      </h2>

      <div className="flex justify-center items-center px-16 md:px-0 flex-wrap gap-20">
        {clients.map((client, index) => (
          <ClientCard key={client.name} info={client} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Client;
