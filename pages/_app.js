// import App from 'next/app'
import { useRouter } from 'next/router'

import AppShell from '../components/app-shell';
import '../styles/global.scss';

const pathProps = {
	'/resume': ['standalone'],
}

function MyApp({ Component, pageProps }) {
	const router = useRouter()

	return (
		pathProps[router.pathname]?.includes('standalone') ?
			<Component {...pageProps} />
			:
			<AppShell>
				<Component {...pageProps} />
			</AppShell>
	);
}
  
// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
