import { useRouter } from 'next/router';
import 'antd/dist/antd.min.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return <Component {...pageProps} {...router} />
}

export default MyApp
