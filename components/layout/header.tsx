import Link from 'next/link';

const linkStyle = 'text-white hover:text-red-500 transition-all';

function Header() {
  return (
    <header className="fixed bg-black/50 px-3 py-2 w-full">
      <ul className="flex gap-3">
        <li className={linkStyle}>
          <Link href="/">Home</Link>
        </li>
        <li className={linkStyle}>
          <Link href="/bar">Bar</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
