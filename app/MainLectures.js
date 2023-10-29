'use client'
import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function MainLectures() {
  const [lectures, setLectures] = useState();
  useEffect(() => {
    fetch("http://localhost:3000/api/lecture")
      .then(res => res.json())
      .then(data => setLectures(data) )
      .catch(e => console.log(e.message) )
  }, []);

  return (
    <ul className='{styles.lectureList}'>

      { lectures && lectures.map((item, idx) => (
        <li key={idx}> <Link href={'/lecture/' + item.lectureId} >
          <Image src={item.img}
            width={200}
            height={200}
            alt={item.title + 'image'} />
          <h2>{item.title}</h2>
          <p>{item.discription}</p>
        </Link></li>
      ))}

    </ul>
  );
}
