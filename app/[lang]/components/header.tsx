import Link from 'next/link'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from './locale-switcher'
import Nav from './nav'
import { NavTel } from './navTel'
import Image from 'next/image'
import logo from '../../../public/logo.png'
import logo2 from '../../../public/logo2.png'


export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang)

  return (
    <header className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={`/${lang}`}
          className="text-2xl text-white font-semibold flex items-end lg:scale-[1.3]"
        >
          <Image className="w-[60px]" src={logo2} alt="logo" /> <span className='text-transparent translate-y-1 -ml-3 bg-clip-text bg-gradient-to-r from-yellow-500 to-slate-300 font-bold'>mir</span>
        </Link>
        <Nav lang={navigation} params={lang} />
        <div className='hidden md:block'><LocaleSwitcher /></div>
        <NavTel lang={navigation} params={lang} />
      </div>
    </header>
  )
}
