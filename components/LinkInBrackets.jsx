import Link from 'next/link'

const LinkInBrackets = (props) => {
  return (
    <>
      { props.isOutbound ? (
        <a className='text-grotesque bracket-link uppercase' href={ props.url }>
          <span className='inline-block'>{ props.innerText }</span>
        </a>
      ) : (
        <Link className='text-grotesque bracket-link uppercase' href={ props.url }>
          <span className='inline-block'>{ props.innerText }</span>
        </Link>
      ) }
    </>
  );
};

export default LinkInBrackets;