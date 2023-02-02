import Header from './Header';
import { SwitchTransition, Transition } from 'react-transition-group';
import gsap from 'gsap';

import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const router = useRouter();

  const onPageEnter = (node) => {
    // gsap.to(node, {
    //   autoAlpha: 0,
    //   duration: 1.025,
    //   ease: 'power4.inOut'
    // })
    gsap.to(`.transition-block`, {
      y: '100%',
      delay: 0.275,
      duration: 1.215,
      ease: 'power4.inOut',
      onComplete: () => {
        gsap.set(`.transition-block`, { y: '-100%' })
      },
    })
    gsap.to(`.transition-block .transition-inner-above`, {
      y: 0,
      delay: 0.265,
      duration: 1.275,
      ease: 'power4.inOut'
    })
    gsap.to(`.transition-block .transition-inner-below`, {
      y: 0,
      delay: 0.275,
      duration: 1.015,
      ease: 'power4.inOut'
    })

  };

  const onPageExit = (node) => {
    // gsap.to(`.transition-block`, {
    //   y: 0,
    //   duration: 1.025,
    //   ease: 'power4.inOut'
    // })
  };

  const onPageClick = (e) => {
    // console.log(e)

    gsap.to(`.transition-block`, {
      y: 0,
      duration: .825,
      ease: 'power4.inOut'
    })
    gsap.to(`.transition-block .transition-inner-above`, {
      y: '-120%',
      duration: .825,
      delay: .125,
      ease: 'power4.inOut'
    })
    gsap.to(`.transition-block .transition-inner-below`, {
      y: '120%',
      duration: .625,
      ease: 'power4.inOut'
    })
  };

  return (
    <>
      <Header
        onClick={onPageClick}
        pathName={router.pathname}
      />
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
          <main className="mx-auto">{children}</main>
        </Transition>
      </SwitchTransition>
    </>
  );
};

export default Layout;
