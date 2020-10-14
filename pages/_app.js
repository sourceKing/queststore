import { useRouter } from 'next/router';
import '../styles/style.css';
import 'antd/dist/antd.min.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <Component {...pageProps} {...router} />
    </>
  );
}

export default MyApp
