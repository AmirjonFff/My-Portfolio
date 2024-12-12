
import './globals.css'
import type { Metadata } from 'next'
import { Locale, i18n } from '@/i18n.config'
import Header from './components/header'

import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AF Portfolio',
  description: 'Опытный фронтенд-разработчик и специалист по автоматизации Bitrix24 с более чем годом опыта. Специализируюсь на разработке современных веб-приложений с использованием React, TypeScript, Redux, Next.js и PostgreSQL. Создаю адаптивные и производительные сайты, интегрированные с LMS-системами и магазинами, а также занимаюсь автоматизацией бизнес-процессов на платформе Bitrix24. Реализовал множество проектов, включая интернет-магазины, административные панели и корпоративные веб-приложения.',
  openGraph: {
    title: 'AF Portfolio',
    description: 'Посмотрите мой портфель. Опыт в React, TypeScript, Redux, Next.js и PostgreSQL.',
    url: 'https://amir-my-portfolio.vercel.app/',
    images: [
      {
        url: 'https://amir-my-portfolio.vercel.app/_next/static/media/logo3.c18e27dc.png', // Замените на вашу картинку для социальных сетей
        width: 1200,
        height: 630,
        alt: 'AF Portfolio'
      }
    ],
    siteName: 'AF Portfolio',    
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AF Portfolio',
    description: 'Посмотрите мой портфель. Опыт в React, TypeScript, Redux, Next.js и PostgreSQL.',
  }
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang}>
      <meta name="google-site-verification" content="ZDvACWe3RTFiiqtFc_HksO86aJy-LrnPooXn_zay4gU" />
      <meta name="yandex-verification" content="48ac92edc5db076f" />
      <head>
        <meta name="description" content={'Опытный фронтенд-разработчик и специалист по автоматизации Bitrix24 с более чем годом опыта. Специализируюсь на разработке современных веб-приложений с использованием React, TypeScript, Redux, Next.js и PostgreSQL. Создаю адаптивные и производительные сайты, интегрированные с LMS-системами и магазинами, а также занимаюсь автоматизацией бизнес-процессов на платформе Bitrix24. Реализовал множество проектов, включая интернет-магазины, административные панели и корпоративные веб-приложения.'} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={'AF Portfolio'} />
        <meta property="og:description" content={'Посмотрите мой портфель. Опыт в React, TypeScript, Redux, Next.js и PostgreSQL.'} />
        <meta property="og:image" content={'https://amir-my-portfolio.vercel.app/_next/static/media/logo3.c18e27dc.png' } />
        <meta property="og:url" content={'https://amir-my-portfolio.vercel.app/'} />
        <meta property="og:site_name" content={'AF Portfolio'} />
        <meta name="twitter:card" content={'summary_large_image'} />
        <meta name="twitter:title" content={'AF Portfolio'} />
        <meta name="twitter:description" content={'Посмотрите мой портфель. Опыт в React, TypeScript, Redux, Next.js и PostgreSQL.'} />
      </head>
      <body className={inter.className}>
        <Header lang={params.lang} />
        <Toaster
          position="top-center"
        />
        <main>{children}</main>
      </body>
    </html>
  )
}
