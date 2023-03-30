import '@/styles/globals.scss'
import '@/styles/reset.scss'
import 'swiper/css/bundle'
import type { AppProps } from 'next/app'
import Layout from "@/components/base/Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
