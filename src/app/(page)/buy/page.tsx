import Navbar from '@/app/components/topBar'
import Navbar1 from '@/app/components/topBar1'
import Link from 'next/link'
import { Button } from '@/app/components/ui/button'

const images = [
  '/image1.jpg?height=400&width=800',

]
const texts = [
  '티켓구매 페이지',
]

export default function Introduction() {
return (
    <>
      <Navbar images={images} title="축제 정보" texts={texts} /> 
      <Navbar1 />
      <div className="max-w-7xl mx-auto pt-24 px-32">
        {/* 관람료 표 */}
        <section id="관람료" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">관람료</h2>
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4">구분</th>
                <th className="border border-gray-300 p-2">개인</th>
                <th className="border border-gray-300 p-2">단체(20인 이상)</th>
                <th className="border border-gray-300 p-2">비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3">어른</td>
                <td className="border border-gray-300 p-2">₩9,000</td>
                <td className="border border-gray-300 p-2">₩8,000</td>
                <td className="border border-gray-300 p-2">20 ~ 64세</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">군경</td>
                <td className="border border-gray-300 p-2">₩7,000</td>
                <td className="border border-gray-300 p-2">₩7,000</td>
                <td className="border border-gray-300 p-2">하사이하 군인</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">장애인</td>
                <td className="border border-gray-300 p-2">₩7,000</td>
                <td className="border border-gray-300 p-2">₩7,000</td>
                <td className="border border-gray-300 p-2">경비교도</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">65세 이상</td>
                <td className="border border-gray-300 p-2">₩7,000</td>
                <td className="border border-gray-300 p-2">₩7,000</td>
                <td className="border border-gray-300 p-2">경로 우대</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">초, 중, 고</td>
                <td className="border border-gray-300 p-2">₩6,000</td>
                <td className="border border-gray-300 p-2">₩5,000</td>
                <td className="border border-gray-300 p-2"></td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">24개월 이상</td>
                <td className="border border-gray-300 p-2">₩4,000</td>
                <td className="border border-gray-300 p-2">₩3,000</td>
                <td className="border border-gray-300 p-2"></td>
              </tr>
            </tbody>
          </table>
        </section>
                {/* 티켓 구매하기 버튼 */}
        <div className="flex justify-center mb-8">
          <Button asChild>
            <Link href="/buy">지금 티켓 구매하기</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
