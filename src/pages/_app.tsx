import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../../hooks/useAuth'
import { RecoilRoot } from 'recoil'

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
    <AuthProvider>
     <Component {...pageProps} />
     </AuthProvider> 
     </RecoilRoot>
  )
}

export default App