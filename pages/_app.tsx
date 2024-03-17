import { useEffect } from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  // const router = useRouter();
  // useEffect(() => {
  //   const handleRouteChange = url => {
  //     window.gtag('config', "G-BKTP9T0XV3", {
  //       page_path: url,
  //     });
  //   }
  //   router.events.on('routeChangeComplete', handleRouteChange);
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange);
  //   }
  // }, [router.events]);
  return <Component {...pageProps} />
}

export default MyApp
