import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const links = [
    { url: "/about", title: "About" },
    { url: "/services", title: "Services" },
    { url: "/projects", title: "Projects" },
  ];

  const icons = [
    {
      img: "/icon-facebook.svg",
      url: "https:www.facebook.com",
      alt: "facebook",
    },
    {
      img: "/icon-instagram.svg",
      url: "https:www.instagram.com",
      alt: "instagram",
    },
    {
      img: "/icon-pinterest.svg",
      url: "https:www.pinterest.com",
      alt: "pinterest",
    },
    { img: "/icon-twitter.svg", url: "https:www.twitter.com", alt: "twitter" },
  ];
  return (
    <footer className="h-64 bg-footer-bg text-footer-text font-bold flex flex-col w-screen justify-between items-center py-8">
      {/* IMG */}
      <Link href='/'>
        <Image
          src={"/logo.svg"}
          alt="LOGO"
          width={250}
          height={250}
          className="object-contain"
        />
      </Link>
      {/* LINKS */}
      <div className="flex gap-12 mt-6">
        {links.map((link) => (
          <Link href={link.url} key={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
      {/* ICONS */}
      <div className="flex item-center gap-12 mt-auto">
        {icons.map((icon) => (
          <Link href={icon.url} target="_blank">
            <Image
              src={icon.img}
              alt={`${icon.alt} logo`}
              width={20}
              height={20}
            />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
