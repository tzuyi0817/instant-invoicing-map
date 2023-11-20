import Link from 'next/link';
import Pointer from '@/assets/images/svg/pointer.svg';

function Footer() {
  return (
    <footer className="w-full px-6 py-[22px] bg-black text-white">
      <h2 className="px-[10px] mb-7 flex gap-1 items-center">
        看選前民調
        <Link href="/">
          <Pointer className="w-[126px]" />
        </Link>
      </h2>
      <p className="text-xs px-[10px] mb-[10px]">樹懶設計 shulian@gmail.com</p>
      <p className="text-xs px-[10px]">© 2023 樹懶設計 shulian 版權所有</p>
    </footer>
  );
}

export default Footer;
