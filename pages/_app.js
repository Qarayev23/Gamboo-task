import { Provider } from 'next-auth/client';
import { useRouter } from 'next/router'
import Layout from '../components/layout';
import { wrapper } from "../store/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.min.css';

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  const router = useRouter()

  if (router.pathname.includes("/dashboard")) {
    return (
      <Provider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  } else {
    return (
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default wrapper.withRedux(App);