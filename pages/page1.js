import Blurs from "../components/Blurs"
import Marquee from "../components/Marquee"

export default function Page1() {
  return (
    <>
      <section className="blurs-intro">
        <Blurs />
      </section>
      <section className="flex flex-col gap-8 items-center max-w-[1224px] mx-auto">
        <h1 className="main-heading-1 mx-auto pt-[13rem] text-grotesque">We treat each project with <i className="text-timesnewroman">care</i></h1>
        
        <Marquee 
          rotate="1"
          rotateIncline="left"
          textColor="#FFF" 
          backgroundColor="#0B0B0D" 
          isOutbound={false}
          textContent={[
            { head: "Digital",  sub: "Discover what we do" },
            { head: "Agency",   sub: "Learn more about us" },
            { head: "2023",     sub: "Frenzy what we do" },
          ]}
        />
      </section>
      <div className="block h-[100vh]"></div>
      <div className="block h-[100vh]"></div>
    </>
  );
}
