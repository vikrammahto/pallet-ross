import Link from 'next/link';

export function Header() {
  const links = [
    { title: 'Get started', href: '' },
    { title: 'Create strategy', href: '' },
    { title: 'Pricing', href: '' },
    { title: 'Contact', href: '' },
    { title: 'Solution', href: '' },
    { title: 'E-commerce', href: '' },
  ];
  return (
    <header className="mx-auto max-w-7xl px-6 py-4">
      <nav className="flex justify-between">
        <Link href="/" className="text-lg font-bold">
          Pallet Ross
        </Link>
        <ul className="flex gap-6 font-semibold">
          {links.map((link) => (
            <li key={link.title}>
              <a href={link.href}>{link.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
