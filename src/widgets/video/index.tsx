export function VideoSection() {
  return (
    <section className="bg-black py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-20">
        {/* Section Title */}
        <div className="mb-8 text-center lg:mb-12">
          <h2 className="mb-3 text-3xl font-bold text-white lg:text-4xl">
            여행 소개 영상
          </h2>
          <p className="text-base text-white/70 lg:text-lg">
            ㈜ IFC 북해도 프리미엄 투어를 미리 만나보세요
          </p>
        </div>

        {/* Video Container */}
        <div className="mx-auto max-w-5xl overflow-hidden rounded-lg shadow-2xl">
          <video
            className="aspect-video w-full"
            controls
            preload="metadata"
            poster="/images/image1.jpg"
          >
            <source src="/2025+IFC+북해도+소개영상.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}