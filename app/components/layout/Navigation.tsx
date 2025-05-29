import Link from "next/link";

export function Navigation() {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/allproducts", label: "All Products" },
    { href: "/women", label: "Women" },
    { href: "/productsMen", label: "Men" },
  ];

  return (
    <>
      {navItems.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.label}
        </Link>
      ))}
    </>
  );
}
