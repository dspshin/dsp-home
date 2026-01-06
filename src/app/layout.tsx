import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://dsp.ai.kr'),
  title: {
    default: 'DSP - AI 기반 통합 서비스 플랫폼',
    template: '%s | DSP',
  },
  description: 'AI 관상, 동물상 테스트, 사주, 퍼스널 컬러 진단, 타워 디펜스 게임까지. DSP의 다양한 인공지능 서비스를 한곳에서 즐겨보세요.',
  keywords: ['DSP', 'AI 관상', '동물상 테스트', '무료 사주', '퍼스널 컬러', '타워 디펜스', '인공지능 운세', '얼굴상 테스트', '2026년 운세'],
  authors: [{ name: 'DSP Team' }],
  creator: 'DSP Team',
  publisher: 'DSP',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'DSP - AI 기반 통합 서비스 플랫폼',
    description: 'AI 관상, 동물상 테스트, 사주, 퍼스널 컬러, 타워 디펜스 등 다양한 AI 서비스를 제공합니다.',
    url: 'https://dsp.ai.kr',
    siteName: 'DSP',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DSP - AI 기반 통합 서비스 플랫폼',
    description: 'AI 관상, 동물상 테스트, 사주, 퍼스널 컬러, 타워 디펜스 등 다양한 AI 서비스를 제공합니다.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
