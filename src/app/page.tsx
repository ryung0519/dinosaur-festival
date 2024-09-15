'use client'

import Navbar from '@/app/components/topBar'


export default function Home() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">공룡 축제에 오신 것을 환영합니다!</h1>
        <p className="text-xl text-gray-700 mb-8">
          공룡 축제는 역사와 과학, 그리고 재미가 어우러진 특별한 행사입니다. 
          다양한 프로그램과 전시를 통해 공룡의 세계를 직접 체험해보세요!
        </p>
        {[...Array(10)].map((_, i) => (
          <p key={i} className="text-gray-700 mb-4">
            이 축제는 전 세계에서 가장 큰 공룡 테마 축제 중 하나입니다. 
            최신 고생물학 연구 결과를 바탕으로 한 전시와 체험 프로그램, 
            그리고 세계적인 전문가들의 강연 등 다양한 콘텐츠를 제공합니다. 
            가족, 친구들과 함께 잊지 못할 추억을 만들어보세요!
          </p>
        ))}
      </div>
    </>
  )
}