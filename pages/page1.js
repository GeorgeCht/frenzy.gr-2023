import Blurs from "../components/Blurs.jsx";

export default function Page1() {
  return (
    <>
      <section className="blurs-intro">
        <Blurs />
      </section>
      <section className="flex flex-col gap-8 items-center max-w-[1224px] mx-auto">
        <h1 className="main-heading-1 mx-auto py-[16rem] text-grotesque">We treat each project with <i className="text-timesnewroman">care</i></h1>
      </section>
    </>
  );
}
