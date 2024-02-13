'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { i18n } from '@/i18n.config'

export default function LocaleSwitcher() {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  const lang = pathName.split('/')[1];

  return (
    <ul className='gap-x-3 flex'>
      {i18n.locales.map(locale => {
        return (
          <li key={locale}>
            <Link
              href={redirectedPathName(locale)}
              className={`rounded-md border ${locale ===  lang ? "bg-black" : "bg-[#121212]"} px-2 py-1 md:px-3 md:py-2  text-white`}
            >
              {locale}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
