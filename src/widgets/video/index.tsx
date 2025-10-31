export function VideoSection() {
  return (
    <section className="bg-black py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-20">
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
            muted
            autoPlay
            loop
            playsInline
            src="https://res.cloudinary.com/dnpcpkdut/video/upload/v1761886117/2025_IFC_%EB%B6%81%ED%95%B4%EB%8F%84_%EC%86%8C%EA%B0%9C%EC%98%81%EC%83%81_sdb14s.mp4"
          >
            <source src="/2025+IFC+북해도+소개영상.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
