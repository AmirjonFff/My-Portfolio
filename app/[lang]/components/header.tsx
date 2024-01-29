import Link from 'next/link'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from './locale-switcher'


export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang)

  return (
    <header className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={`/${lang}`}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <img className="w-[50px] scale-125" src="https://fotohosting.su/images/2024/01/15/logo.png" alt="logo" />
        </Link>
        <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
          <li>
            <Link className='text-[#ADB7BE] !text-[18px] hover:text-white' href={`/${lang}/about`}>{navigation.about}</Link>
          </li>
          <li>
            <Link className='text-[#ADB7BE] !text-[18px] hover:text-white' href={`/${lang}/projects`}>{navigation.projects}</Link>
          </li>
          <li>
            <Link className='text-[#ADB7BE] !text-[18px] hover:text-white' href={`/${lang}/contact`}>{navigation.contact}</Link>
          </li>         
        </ul>
        <LocaleSwitcher />
      </div>
    </header>
  )
}
