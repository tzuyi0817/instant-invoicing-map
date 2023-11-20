import Link from 'next/link';

function Footer() {
  return (
    <footer className="w-full px-6 py-[22px] bg-black text-white">
      <h2 className="px-[10px] flex gap-1 items-center">
        看選前民調
        <Link href="/">
          <svg
            viewBox="0 0 131 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[126px]"
          >
            <g id="btn">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M107.571 0.247803L130.25 17.318H0.256836V15.161H123.923L106.483 2.0336L107.571 0.247803Z"
                fill="#DD4D2A"
              />
            </g>
          </svg>
        </Link>
      </h2>
      <p className="text-xs px-[10px] mt-7 mb-[10px]">樹懶設計 shulian@gmail.com</p>
      <p className="text-xs px-[10px]">© 2023 樹懶設計 shulian 版權所有</p>
    </footer>
  );
}

export default Footer;
