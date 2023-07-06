import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import Loader from "../components/Loader";
import toast from 'react-hot-toast';
import UserProfile from '../components/UserProflie';
import PostFeed from '../components/PostFeed';
import { getUserWithUsername } from '../lib/firebase';

const inter = Inter({ subsets: ['latin'] })

// Server-Side Rendering (SSR) for Getting Posts
export async function getServerSideProps( {query} ) {
  const { username } = query;

  const userDoc = await getUserWithUsername(username);

  //JSON serializable data
  let user = null;
  let posts = null;

  if (userDoc) {
    user = userDoc.data();
    const postsQuery = userDoc.ref
      .collection('posts')
      .where('published', '==', true)
      .orderBy('createdAt', 'desc')
      .limit(5);
    
    posts = (await postsQuery.get()).docs.map(postToJSON);
  }

  return {
    props: {user, posts},
  };
}

export default function UserProfilePage({user, posts}) {
  return (
    <main>
      <UserProfile user={user} />
      <PostFeed posts={posts} />
    </main>
  )
};
