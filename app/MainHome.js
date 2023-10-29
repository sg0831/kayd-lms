'use client'
import Link from 'next/link'
import styles from './page.module.css'
import MainLectures from './MainLectures';

export default function MainHome() {



  return (
    <main className='{styles.mainHome}'>
<MainLectures />
    </main>

  );
}