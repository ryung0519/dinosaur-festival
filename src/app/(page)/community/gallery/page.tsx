'use client'

import Navbar from '@/app/components/topBar'
import Navbar1 from '@/app/components/topBar1'
import { Button } from "../../../components/ui/button"
import { Card, CardContent } from "../../../components/ui/card"
import Image from "next/image"
import Link from "next/link"

const images = [
  '/image1.jpg?height=400&width=800',
]
const texts = [
  '갤러리',
  '과거로의 시간여행, 빛과의 만남'
]

export default function gallery() {
  return (
    <>
      <Navbar images={images} title="축제 정보" texts={texts} /> 
      <Navbar1 />
      <div className="max-w-7xl mx-auto pt-24 px-32">

       {/* 
       <header className="bg-primary text-primary-foreground ">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center">갤러리</h1>
            <p className="text-xl text-center mt-2">과거로의 시간여행, 빛과의 만남</p>
          </div>
        </header>
        */}
      <main className="flex-grow container mx-auto px-4 py-8">
          {/* 
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">축제 정보</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p><strong>날짜:</strong> 2023년 8월 1일 - 8월 15일</p>
                  <p><strong>장소:</strong> 빛국립공원</p>
                  <p><strong>주요 이벤트:</strong> 빛 전시, 화석 발굴 체험, 3D 빛 영화 상영</p>
                </div>
                <div className="relative h-48 md:h-full">
                  <Image
                    src="/light1?height=200&width=400"
                    alt="빛축제 전경"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"

                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        */}

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">빛 전시</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['티라노사우루스', '트리케라톱스', '스테고사우루스'].map((light) => (
              <Card key={light}>
                <CardContent className="p-4">
                  <div className="relative h-48 mb-4">
                    <Image
                      src="/image1.jpg"
                      alt={light}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{light}</h3>
                  <p className="text-muted-foreground">실제 크기의 {light} 모형을 만나보세요!</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">체험 프로그램</h2>
          <Card>
            <CardContent className="p-6">
              <ul className="list-disc pl-6 space-y-2">
                <li>화석 발굴 체험: 직접 고생물학자가 되어보세요!</li>
                <li>빛 퍼즐 맞추기: 대형 빛 퍼즐로 두뇌를 자극해보세요.</li>
                <li>빛 페이스 페인팅: 좋아하는 빛으로 변신해보세요!</li>
                <li>3D 빛 영화 상영: 생생한 빛의 세계를 경험해보세요.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">티켓 구매</h2>
          <Card>
            <CardContent className="p-6">
              <p className="mb-4">성인: 15,000원 / 청소년: 12,000원 / 어린이: 8,000원</p>
              <Button asChild>
                <Link href="/buy">지금 티켓 구매하기</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-muted py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 빛축제. All rights reserved.</p>
          <p className="mt-2">
            문의: info@lightsaurfestival.com | 전화: 123-456-7890
          </p>
          <div className="mt-4 space-x-4">
            <Link href="#" className="text-primary hover:underline">Facebook</Link>
            <Link href="#" className="text-primary hover:underline">Instagram</Link>
            <Link href="#" className="text-primary hover:underline">Twitter</Link>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}