import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2025년 ㈜ IFC 북해도 여행 | 드림월드 여행사",
  description: "2025년 11월 19일~22일 (3박4일) 북해도 여행 일정 안내 - 도야 온천, 삿포로 관광, 프리미엄 여행 프로그램",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
