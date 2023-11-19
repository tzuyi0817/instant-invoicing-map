import Image from 'next/image';
import Link from 'next/link';
import Logo from 'assets/images/svg/2020-vote.svg';
import Menu from 'assets/images/svg/menu.svg';

function Header() {
  return (
    <header className="fixed px-4 py-3 w-full border-b-[3px] border-black flex justify-between">
      <Logo width="285" />
      <Menu />

      <ul>
        <li>
          <Link href="/">首頁</Link>
        </li>
        <li>
          <Link href="/">開票地圖</Link>
        </li>
        <li>
          <Link href="/">候選人政見</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
