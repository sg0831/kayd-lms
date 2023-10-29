'use client'
import Link from 'next/link'
import styles from './page.module.css'
import { useState } from 'react';

export default function MainSearch() {

  const [searchKeyword, setSearchKeyword] = useState('');

  const changeInput = (e) => {
    setSearchKeyword(e.target.value);
  }


  return (
    <section className='{styles.mainSearchArea}'>
    <input type='text' onChange={changeInput} placeholder='강의명, 강사명, 키워드 등오로 검색할 수 있어요.' />
    <Link href={'/search?keyword=' + searchKeyword }>검색</Link>
  </section>
  );

}