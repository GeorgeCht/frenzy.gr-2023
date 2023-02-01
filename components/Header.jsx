import Link from 'next/link'
import Logo from '../components/Logo.jsx'

const Header = () => {
  return (
    <header className="flex justify-between mx-auto mb-8 px-4 py-8 border-b border-black/20 fixed w-full items-center z-10">
      <h1 className="text-2xl font-semibold">Page Transition</h1>
      <Logo width={99} height={12} fill={'#000'}/>

      <nav className="flex gap-4 text-lg text-blue-700">
        <Link href="/">Home</Link>
        <Link href="/page1">Page 1</Link>
        <Link href="/page2">Page 2</Link>
      </nav>
    </header>
  );
};

export default Header;