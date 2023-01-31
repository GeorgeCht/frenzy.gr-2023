import { useEffect, useState } from 'react';
import Layout from '../components/Layout.jsx';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [isPreloading, setIsPreloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsPreloading(false);
    }, 4000);
  }, []);

  return (
    <>
      {isPreloading ? (
        <div>Loading here...</div>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default MyApp;
