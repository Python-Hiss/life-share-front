import '../styles/globals.css'
import '../styles/video.css'
import '../styles/About.css'
import '../styles/tailwind.css'
import '../styles/form.css'
import '../styles/hospitalProfile.css'
import { AuthProvider } from '../contexts/auth'
function MyApp({ Component, pageProps }) {
  return <AuthProvider>
      <Component {...pageProps} />
  </AuthProvider>
}
export default MyApp