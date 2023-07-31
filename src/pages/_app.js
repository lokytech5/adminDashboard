import MainLayout from '@/components/shared/MainLayout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )

}
