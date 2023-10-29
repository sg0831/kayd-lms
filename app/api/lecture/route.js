import { NextResponse } from "next/server";

export async function GET() {
  const lectures = [
    {
      'lectureId': 1,
      'title': '기초영어 - 문법',
      'img': 'https://picsum.photos/200',
      'teacher': 'John',
      'discription': '영어를 처음 접하는 사람들을 위한 완전 기초 영어 문법을 배우는 강의입니다.'
    }, {
      'lectureId': 2,
      'title': '기초영어 - 회화',
      'img': 'https://picsum.photos/200',
      'teacher': 'Anna',
      'discription': '영어를 처음 접하는 사람들을 위한 완전 기초 영어 회화를 배우는 강의입니다.'
    }, {
      'lectureId': 3,
      'title': '기초일본어 - 문법',
      'img': 'https://picsum.photos/200',
      'teacher': '정승균',
      'discription': '기초 일본어의 문법을 배울 수 있는 강의입니다.'
    }, {
      'lectureId': 4,
      'title': '기초일본어 - 회화',
      'img': 'https://picsum.photos/200',
      'teacher': '정승균',
      'discription': '기초 일본어의 회화를 배울 수 있는 강의입니다.'
    }
  ];

  return NextResponse.json( lectures );
}