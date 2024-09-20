'use client'

import Navbar from '@/app/components/topBar'
import Navbar1 from '@/app/components/topBar1'
import Footer from '@/app/components/footer'
import React from 'react'
import ImageSlider from './components/ui/imageSlider'
import { Button } from "./components/ui/button"
import { Card, CardContent } from "./components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function Home() {

  const images = [
    '/image1.jpg?height=400&width=800',
    '/dino2.jpg?height=400&width=800',
    '/dino3.jpg?height=400&width=800',
  ]

  return (
    <>
      <Navbar />
      <Navbar1 />
      <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-20">
        <ImageSlider images={images} />
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">축제 정보</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p><strong>날짜:</strong> 2023년 8월 1일 - 8월 15일</p>
                  <p><strong>장소:</strong> 공룡국립공원</p>
                  <p><strong>주요 이벤트:</strong> 공룡 전시, 화석 발굴 체험, 3D 공룡 영화 상영</p>
                </div>
                <div className="relative h-48 md:h-full">
                  <Image
                    src="/dino1.jpg"
                    alt="공룡축제 전경"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"

                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">공룡 전시</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['티라노사우루스', '트리케라톱스', '스테고사우루스'].map((dino) => (
              <Card key={dino}>
                <CardContent className="p-4">
                  <div className="relative h-48 mb-4">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt={dino}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{dino}</h3>
                  <p className="text-muted-foreground">실제 크기의 {dino} 모형을 만나보세요!</p>
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
                <li>공룡 퍼즐 맞추기: 대형 공룡 퍼즐로 두뇌를 자극해보세요.</li>
                <li>공룡 페이스 페인팅: 좋아하는 공룡으로 변신해보세요!</li>
                <li>3D 공룡 영화 상영: 생생한 공룡의 세계를 경험해보세요.</li>
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
      <Footer />
    </div>
    </>
  )
}