export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-950">
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-sky-blue/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-[1280px] px-5 py-10 lg:px-20 lg:py-12">
        {/* Main Content */}
        <div className="space-y-8">
          {/* Company Info */}
          <div className="text-center">
            <h3 className="mb-2 text-lg font-bold tracking-wide text-white lg:text-xl">
              모두투어 드림월드여행사
            </h3>
          </div>

          {/* Divider */}
          <div className="mx-auto h-px w-16 bg-gradient-to-r from-transparent via-white/40 to-transparent lg:w-20" />

          {/* Contact Info */}
          <div className="space-y-3 text-center text-sm leading-relaxed text-white/90 lg:text-base">
            <div className="flex flex-col items-center gap-2 lg:flex-row lg:justify-center lg:gap-6">
              <div className="flex items-center gap-2">
                <span className="font-medium text-white">담당자</span>
                <span>서정오 대표</span>
              </div>
              <div className="hidden h-4 w-px bg-white/30 lg:block" />
              <div className="flex items-center gap-2">
                <span className="font-medium text-white">전화</span>
                <a
                  href="tel:01041201665"
                  className="transition-colors hover:text-sky-blue"
                >
                  010-4120-1665
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="font-medium text-white">카카오톡</span>
              <span className="font-mono">sjo0023</span>
            </div>
          </div>

          {/* Divider */}
          <div className="mx-auto h-px w-full max-w-2xl bg-white/20" />

          {/* Copyright */}
          <div className="text-center text-xs text-white/60 lg:text-sm">
            <p>© 2025 Dream World Travel. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
