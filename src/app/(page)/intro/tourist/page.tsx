import Navbar from '@/app/components/topBar'

export default function Introduction() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">관광요소</h1>
        <section id="축제개요" className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">축제개요</h2>
          <p className="text-gray-700 mb-4">
            공룡축제는 매년 열리는 세계적인 규모의 축제입니다. 최신 고생물학 연구 결과를 바탕으로 한 전시와 체험 프로그램,
            그리고 세계적인 전문가들의 강연 등 다양한 콘텐츠를 제공합니다.
          </p>
        </section>
        <section id="운영시간" className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">운영시간</h2>
          <p className="text-gray-700 mb-4">
            축제는 매일 오전 9시부터 오후 6시까지 운영됩니다. 주말과 공휴일에는 오후 8시까지 연장 운영됩니다.
          </p>
        </section>
        <section id="오시는-길" className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">오시는 길</h2>
          <p className="text-gray-700 mb-4">
            축제장은 서울시 강남구 테헤란로 123에 위치해 있습니다. 지하철 2호선 강남역에서 도보로 10분 거리에 있습니다.
          </p>
        </section>
        <section id="교통안내" className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">교통안내</h2>
          <p className="text-gray-700 mb-4">
            지하철, 버스, 자가용 등 다양한 교통수단으로 접근이 가능합니다. 주차 공간이 제한되어 있으므로 가능한 대중교통을 이용해 주시기 바랍니다.
          </p>
        </section>
        <section id="식당안내" className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">식당안내</h2>
          <p className="text-gray-700 mb-4">
            축제장 내에는 다양한 종류의 식당과 카페가 있습니다. 공룡 테마의 특별 메뉴도 준비되어 있으니 꼭 체험해 보세요.
          </p>
        </section>
        <section id="주변관광지-안내" className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">주변관광지 안내</h2>
          <p className="text-gray-700 mb-4">
            축제장 주변에는 다양한 관광지가 있습니다. 축제 방문과 함께 서울의 다른 명소들도 둘러보시는 것을 추천드립니다.
          </p>
        </section>
      </div>
    </>
  )
}
