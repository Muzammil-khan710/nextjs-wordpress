import { FaustProvider } from '@faustwp/core'
import 'components/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import '../../faust.config'

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()

  return (
    <FaustProvider pageProps={pageProps} key={router.asPath}>
      <Component {...pageProps} />
    </FaustProvider>
  )

}
