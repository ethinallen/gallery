import type { AppProps } from 'next/app'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
console.log(process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);
  return <Component {...pageProps} />
}
