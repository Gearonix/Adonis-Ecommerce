import type {AppProps} from 'next/app';
import Layout from './providers/Layout';
import {Provider} from 'react-redux';
import AuthGuard from './providers/AuthGuard';
import AsyncAuthorization from 'app/providers/AsyncAuthorization';
import wrapper from './redux/store';
import {GoogleOAuthProvider} from '@react-oauth/google';
import Head from 'next/head';

const App = ({Component, ...rest}: AppProps) => {
    const {store, props} = wrapper.useWrappedStore(rest);
    return <>
        <Head>
            <title>Adonis</title>
        </Head>
        <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID as string}>
            <Provider store={store}>
                <Layout>
                    <AsyncAuthorization>
                        <AuthGuard>
                            <Component {...props.pageProps} />
                        </AuthGuard>
                    </AsyncAuthorization>

                </Layout>
            </Provider>
        </GoogleOAuthProvider>
    </>;
};


export default App;
