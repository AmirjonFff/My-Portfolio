import Link from 'next/link'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from './locale-switcher'
import Nav from './nav'
import { NavTel } from './navTel'


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
        <Nav lang={navigation} params={lang} />
        <div className='hidden md:block'><LocaleSwitcher /></div>
        <NavTel lang={navigation} params={lang} />
      </div>
    </header>
  )
}
