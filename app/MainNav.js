'use client'
import Link from 'next/link'
import styles from './page.module.css'

export default function MainNav() {
  const navList = [
    {
      'name': '홈',
      'url': '/'
    }, {
      'name': '전체 강의',
      'url': '/lacture'
    }, {
      'name': '커뮤니티',
      'url': '/community'
    }, {
      'name': '고객 문의',
      'url': '/customerInquiry'
    }
  ];

  return (
    <nav className='{styles.globalNav}'>
      <ul>
        {navList.map((menu) => (
          <li> <Link href='{ menu.url }'>{menu.name}</Link> </li>
        ))}
      </ul>
    </nav>
  );
}