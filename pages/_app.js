import '@/styles/globals.css'
import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';

function App({ Component, pageProps }) {
  return (
  <>
    <Navbar />
    <Component {...pageProps} />
    <Toaster />
  </>
  );
}

export default App;
