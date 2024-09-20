import React, { useState, useEffect } from 'react'
import Image from 'next/image'

interface ImageSliderProps {
  images: string[]
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // 5초마다 이미지 변경

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative w-full h-[400px]">
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
    </div>
  )
}