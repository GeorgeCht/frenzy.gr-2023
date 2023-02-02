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
      <header className="flex justify-between mx-auto mb-8 px-4 py-8 border-b border-black/20 fixed w-full items-center z-10">
        <h1 className="text-2xl font-semibold">Page Transition</h1>
        <Logo width={99} height={12} fill={'#0B0B0D'}/>

        <nav className="flex gap-4 text-lg text-blue-700">
          <Link onClick={props.onClick} href="/">Home</Link>
          <Link onClick={props.onClick} href="/page1">Page 1</Link>
          <Link onClick={props.onClick} href="/page2">Page 2</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;