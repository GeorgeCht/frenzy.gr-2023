import Head from 'next/head';
import Marquee from '../components/Marquee';
import LinkInBrackets from '../components/LinkInBrackets';

export default function Home() {
  const texts = [
    { head: "Header 1", sub: "Subheader 1" },
    { head: "Header 2", sub: "Subheader 2" },
    { head: "Header 3", sub: "Subheader 3" },
  ];
  return (
    <section className="flex flex-col w-full relative">
      <div className="block h-[100vh]"></div>
      <h1 className="main-heading-1 text-grotesque">Home page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolor
        aspernatur natus at totam quae temporibus, optio mollitia numquam est ab
        ut non et omnis quas in, laudantium nemo. Nisi, culpa. Porro ab, ducimus
        rerum, sed eum facilis dolorum a veniam cumque sit molestias quaerat
        nobis! Nulla veritatis ea eius!
      </p>
      <Marquee 
        rotate={2}
        textColor="#FFF" 
        backgroundColor="#0B0B0D" 
        isOutbound={false}
        textContent={[
          { head: "Digital",  sub: "Discover what we do" },
          { head: "Agency",   sub: "Learn more about us" },
          { head: "2023",     sub: "Frenzy what we do" },
        ]}
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        voluptatem voluptas ipsa voluptatibus nihil totam a sequi vel tempore
        incidunt. Possimus, obcaecati soluta non in nostrum eaque nemo quod
        adipisci eos architecto expedita eum quis amet dolorem voluptas quas
        impedit voluptatem aperiam eveniet, reiciendis, minima ex. Consectetur
        totam voluptas quisquam.
      </p>
      <LinkInBrackets url={"#"} isOutbound={true} innerText={"Proceed without audio"} />

      <div className="block h-[100vh]">

      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        voluptatem voluptas ipsa voluptatibus nihil totam a sequi vel tempore
        incidunt. Possimus, obcaecati soluta non in nostrum eaque nemo quod
        adipisci eos architecto expedita eum quis amet dolorem voluptas quas
        impedit voluptatem aperiam eveniet, reiciendis, minima ex. Consectetur
        totam voluptas quisquam.
      </p>

    </section>
  );
}
