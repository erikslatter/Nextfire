import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import Loader from "../components/Loader";
import toast from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Loader show />
      <Link href="/jeffd23" onClick={() => toast.success('Welcome to Jeff!')} >Jeff D 23's Page</Link>
    </div>
  )
}
