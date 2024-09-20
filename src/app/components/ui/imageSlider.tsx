import React, { useState, useEffect } from 'react'
import Image from 'next/image'

interface ImageSliderProps {
  images: string[]
  children?: React.ReactNode
}

export default function ImageSlider({ images, children }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // 5초마다 이미지 변경

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative w-full h-[600px]">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Slide ${index + 1}`}
          layout="fill"
          objectFit="cover"
          className={`absolute top-0 left-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black opacity-40" />
      <div className="absolute inset-0 flex justify-center items-center">
        {children}
      </div>
    </div>
  )
}
