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
    <div className="relative w-full h-screen"> {/* Full screen height */}
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover" // Cover the entire viewport
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black opacity-40" /> {/* Optional overlay */}
      <div className="absolute inset-0 flex justify-center items-center">
        {children}
      </div>
    </div>
  )
}
