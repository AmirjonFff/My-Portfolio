
import './globals.css'
import type { Metadata } from 'next'
import { Locale, i18n } from '@/i18n.config'
import Header from './components/header'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AF Portfolio',
  description: 'Опытный фронтенд-разработчик и специалист по автоматизации Bitrix24 с более чем годом опыта. Специализируюсь на разработке современных веб-приложений с использованием React, TypeScript, Redux, Next.js и PostgreSQL. Создаю адаптивные и производительные сайты, интегрированные с LMS-системами и магазинами, а также занимаюсь автоматизацией бизнес-процессов на платформе Bitrix24. Реализовал множество проектов, включая интернет-магазины, административные панели и корпоративные веб-приложения.'
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
      <body className={inter.className}>
        <Header lang={params.lang} />
        <main>{children}</main>
      </body>
    </html>
  )
}
