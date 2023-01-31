import Header from './Header';
import { SwitchTransition, Transition } from 'react-transition-group';
import gsap from 'gsap';

import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const router = useRouter();

  const onPageEnter = (node) => {
    gsap.fromTo(
      node,
      {
        y: 15,
        autoAlpha: 0,
        ease: 'power4',
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.915,
        ease: 'power4',
      }
    );
  };

  const onPageExit = (node) => {
    gsap.fromTo(
      node,
      {
        y: 0,
        autoAlpha: 1,
        ease: 'power4.out',
      },
      {
        y: -15,
        autoAlpha: 0,
        duration: 0.675,
        ease: 'power4.inOut',
      }
    );
  };

  return (
    <>
      <Header />
      <SwitchTransition>
        <Transition
          key={router.pathname} // our route as a key
          timeout={575}
          in={true}
          onEnter={onPageEnter} // our enter animation
          onExit={onPageExit} // our exit animation
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <main className="">{children}</main>
        </Transition>
      </SwitchTransition>
    </>
  );
};

export default Layout;
