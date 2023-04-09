import '@/styles/globals.scss'
import '@/styles/reset.scss'
import 'swiper/css/bundle'
import { Provider } from 'react-redux'
import { store } from '@/store'
import type { AppProps } from 'next/app'
import Layout from "@/components/base/Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
