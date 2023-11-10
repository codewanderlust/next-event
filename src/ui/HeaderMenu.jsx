function HeaderLinks() {
  const links = [
    { href: "/", label: "How it Works" },
    { href: "/", label: "Music" },
    { href: "/", label: "Tech" },
    { href: "/", label: "Nightlife" },
  ];

  return (
    <ul className="flex items-center gap-[32px] text-lg tracking-wide">
      {links.map((link, i) => (
        <li key={i}>
          <p className="font-semibold capitalize text-[#f4f4f4]">
            {link.label}
          </p>
        </li>
      ))}
      <div className="cursor-pointer rounded-2xl bg-secondary px-4 py-2  text-xl font-semibold text-[#f4f4f4]">
        <button>Get Started</button>
      </div>
    </ul>
  );
}

export default HeaderLinks;
