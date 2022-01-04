import '../styles/globals.css'
import '../styles/video.css'
// import '../styles/scroll.css'
import '../styles/tailwind.css'
import { AuthProvider } from '../contexts/auth'
import '../styles/form.css'
import '../styles/aboutUs.css'

function MyApp({ Component, pageProps }) {
  return <AuthProvider>
      <Component {...pageProps} />
  </AuthProvider>
}
export default MyApp