'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image' 
import ImageSlider from './ui/imageSlider'

interface NavbarProps {
  images: string[]; // 이미지 배열을 props로 받음
}

const menuItems = [
  {
    title: '공룡축제 소개',
    href: '/intro/introduction',
    subItems: [
      { title: '축제개요', href: '/intro/introduction' },
      { title: '운영시간', href: '/intro/time' },
      { title: '오시는 길', href: '/intro/way' },
      { title: '식당안내', href: '/intro/restaurant' },
      { title: '주변관광지 안내', href: '/intro/tourist' },
      { title: '주최사 소개', href: '/intro/company' }
    ],
  },
  {
    title: '프로그램 안내',
    href: '/guide/event',
    subItems: [
      { title: '이벤트 안내', href: '/guide/event' },
      { title: '주제관', href: '/guide/theme' },
      { title: '시설물', href: '/guide/facility' },
      { title: '체험 프로그램', href: '/guide/experience' }
    ],
  },
  {
    title: '커뮤니티',
    href: '/community/notice',
    subItems: [
      { title: '공지사항', href: '/community/notice' },
      { title: '갤러리', href: '/community/gallery' },
      { title: 'Q&A', href: '/community/qna' }
    ]
  },
  {
    title: '티켓구매',
    href: '/buy',
    subItems: [],
  },
]

export default function Navbar({ images }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative w-full z-10 text-white mx-auto">
      <div className="absolute top-0 left-0 right-0 z-10 h-30 bg-black bg-opacity-70" style={{ maxWidth: '1700px', marginTop: '30px', marginLeft: 'auto', marginRight: 'auto' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold ">공룡 축제</Link>
            </div>
            <div className="hidden sm:flex sm:items-center sm:justify-end sm:flex-grow">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group px-2">
                  <Link href={item.href} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200">
                    {item.title}
                  </Link>
                  {item.subItems.length > 0 && (
                    <div className="absolute z-10 right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {item.subItems.map((subItem, subIndex) => (
                          <Link key={subIndex} href={subItem.href} className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200">
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="sm:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200">
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 이미지 슬라이더 추가 */}
      <div className="relative w-full h-[550px] z-0 bg-black opacity-40">
        {images.length > 1 ? <ImageSlider images={images} /> : <Image src={images[0]} alt="공룡 축제 이미지" layout="fill" objectFit="cover" className="w-full h-full" />}
      </div>
    </nav>
  )
}
