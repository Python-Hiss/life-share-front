import '../styles/globals.css'
import '../styles/video.css'
import '../styles/About.css'
import '../styles/tailwind.css'
import { AuthProvider } from '../contexts/auth'
import '../styles/form.css'
import '../styles/hospitalProfile.css'
function MyApp({ Component, pageProps }) {
  return <AuthProvider>
      <Component {...pageProps} />
  </AuthProvider>
}
export default MyApp