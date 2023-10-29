'use client'
import Link from 'next/link'
import styles from './page.module.css'
import { useState } from 'react';
import MainSearch from './MainSearch';
import UserInfo from './UserInfo';

export default function MainHeader() {

  return (
    <header className='{styles.mainHeader}'>
      <section className="{styles.logoArea  }">
        <Link href='/'>
          <h1>kayd-LMS </h1>
        </Link>
      </section>

      <MainSearch />
      <UserInfo />

    </header>
  );
}