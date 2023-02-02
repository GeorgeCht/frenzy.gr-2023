import Link from 'next/link'
import Logo from '../components/Logo'

const Header = (props) => {
  
  return (
    <>
      <div className="transition-block pointer-events-none flex w-screen h-screen fixed justify-center bg-[#0B0B0D] z-[9999] -translate-y-full">
        <div className="transition-inner-above inline-block w-screen h-[10vw] bg-[#0B0B0D] absolute top-[5vh] rounded-t-[50%] translate-y-0"></div>
        <h4 className="text-white flex text-grotesque items-center text-center justify-center main-heading-2 uppercase">{props.pathName}</h4>
        <div className="transition-inner-below inline-block w-screen h-[10vw] bg-[#0B0B0D] absolute bottom-[10vh] rounded-b-[50%] translate-y-0"></div>
      </div>
      <header className="flex justify-between mx-auto mb-8 px-16 py-12 fixed w-full items-center z-10">
        <nav className="menu-item menu-toggle w-1/3 justify-start items-center">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
            <path d="M1 22H43" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 16H43" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 28H43" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span className="text-grotesque uppercase pl-4 cursor-pointer">Menu</span>
        </nav>
        <Link onClick={props.onClick} href="/" className="flex w-1/3 justify-center">
          <Logo width={99} height={12} fill={'#0B0B0D'}/>
        </Link>
        <div className="menu-item language-toggle flex w-1/3 justify-end">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
            <path d="M11 19.25C15.5563 19.25 19.25 15.5563 19.25 11C19.25 6.44365 15.5563 2.75 11 2.75C6.44365 2.75 2.75 6.44365 2.75 11C2.75 15.5563 6.44365 19.25 11 19.25Z" stroke="#0B0B0D" stroke-miterlimit="10"/>
            <path d="M3.22266 8.25H18.7773" stroke="#0B0B0D" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.22266 13.75H18.7773" stroke="#0B0B0D" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11 19.0268C12.8985 19.0268 14.4375 15.4331 14.4375 11.0002C14.4375 6.56725 12.8985 2.97363 11 2.97363C9.10152 2.97363 7.5625 6.56725 7.5625 11.0002C7.5625 15.4331 9.10152 19.0268 11 19.0268Z" stroke="#0B0B0D" stroke-miterlimit="10"/>
          </svg>
          <span className="text-grotesque uppercase pl-4 cursor-pointer">English</span>
        </div>
      </header>
    </>
  );
};

export default Header;