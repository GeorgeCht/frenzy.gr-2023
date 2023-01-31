import Head from 'next/head';
import LinkInBrackets from '../components/LinkInBrackets';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <section className="flex flex-col gap-8 items-center">
      <h1 className="main-heading-1 text-grotesque">Home page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolor
        aspernatur natus at totam quae temporibus, optio mollitia numquam est ab
        ut non et omnis quas in, laudantium nemo. Nisi, culpa. Porro ab, ducimus
        rerum, sed eum facilis dolorum a veniam cumque sit molestias quaerat
        nobis! Nulla veritatis ea eius!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        voluptatem voluptas ipsa voluptatibus nihil totam a sequi vel tempore
        incidunt. Possimus, obcaecati soluta non in nostrum eaque nemo quod
        adipisci eos architecto expedita eum quis amet dolorem voluptas quas
        impedit voluptatem aperiam eveniet, reiciendis, minima ex. Consectetur
        totam voluptas quisquam.
      </p>
      <LinkInBrackets url={"#"} isOutbound={true} innerText={"Proceed without audio"} />
    </section>
  );
}
