import Link from 'next/link'

/*
props = {
  isOutbound: bool
  innerText: string
  url: string
}
*/

LinkFlip.defaultProps = {
  isOutbound: false,
  isLink: true
}

function LinkFlip(props) {
  return (
    <>
      { props.isOutbound ? (
        <a href={ props.url } className={`linkflip relative inline-block overflow-hidden h-auto cursor-pointer ${props.className}`}>
          <span datatext={ props.innerText }>
            { props.children }
          </span>
        </a>
      ) : (
        <Link href={ props.url } className={`linkflip relative inline-block overflow-hidden h-auto cursor-pointer ${props.className}`}>
          <span datatext={ props.innerText }>
            { props.children }
          </span>
        </Link>
      ) }
    </>
  );
};

export default LinkFlip