'use client'
import Link from 'next/link'
import styles from './page.module.css'
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function UserInfo() {
  const params = useSearchParams();
  const userId = params.get('userId');

  const renderUserInfo = () => {
    // 로그인을 하지 않은 경우
    if (!userId) {
      return (
        <section className='{styles.userAction}'>
          <Link href='/login' >로그인</Link>
          <Link href='/join' >회원가입</Link>
        </section>
      );
    } else {
      return (
        <section className='{styls.userInfo}'>
          <p>
            {userId}님, 환영합니다!
          </p>
          <Link href='/logout'>로그아웃</Link>
          <Link href='/my'>마이페이지</Link>
        </section>
      );
    }
  }

  return (
    <>
      { renderUserInfo() }
    </>
  );
}