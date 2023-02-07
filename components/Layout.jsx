import { SwitchTransition, Transition } from 'react-transition-group'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Header from './Header'
import gsap from 'gsap'

const Layout = ({ children }) => {
  
  const router = useRouter()

  const onPageEnter = (node) => {
    
    console.log('==================')
    console.log('CALLED: onPageEnter')
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
    gsap.to(`#__next > main`, {
      opacity: 1,
      duration: .925,
      ease: 'circ.inOut',
    })
  };

  const onPageExit = (node) => {
    console.log('==================')
    console.log('CALLED: onPageExit')
    // gsap.to(`.transition-block`, {
    //   y: 0,
    //   duration: 1.025,
    //   ease: 'power4.inOut'
    // })
  };


  useEffect(() => {
    gsap.to(`#__next > main`, {
      opacity: 1,
      duration: .925,
      ease: 'circ.inOut',
    })
  })

  return (
    <>
      <Header
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
          <main className="mx-auto opacity-0 z-10">{children}</main>
        </Transition>
      </SwitchTransition>
    </>
  );
};

export default Layout;
