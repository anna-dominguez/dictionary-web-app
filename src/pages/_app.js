import Head from 'next/head'
import { ThemeProvider } from 'next-themes'

import '@/styles/globals.css'

const App = ({ Component, pageProps }) => (
  <div className="grid w-screen justify-center overflow-hidden">
    <Head>
      <title>Dictionary Web App</title>
    </Head>
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  </div>
)

export default App
