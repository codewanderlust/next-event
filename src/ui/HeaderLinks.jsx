function HeaderLinks() {
  const links = [
    { href: "/", label: "All Events" },
    { href: "/", label: "Concerts" },
    { href: "/", label: "Conferences" },
    { href: "/", label: "Rave" },
    { href: "/", label: "More" },
  ];
  return (
    <>
      {
        <ul className="flex items-center gap-2">
          {links.map((link, i) => (
            <li key={i}>
              <p className="font-semibold uppercase text-[#f4f4f4]">
                {link.label}
              </p>
            </li>
          ))}
        </ul>
      }
    </>
  );
}

export default HeaderLinks;
