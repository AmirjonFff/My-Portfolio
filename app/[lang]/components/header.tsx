import Link from 'next/link'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Nav from './nav'
import { NavTel } from './navTel'
import Image from 'next/image'
import logo from '../../../public/logo3.png'
import { MenuCustomList } from './langeEdit'


export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang)

  return (
    <header className="fixed z-40 border-b border-[#33353F] top-0 left-0 right-0 bg-[#100e2b] bg-opacity-100">
      <div className="flex container lg:py-[14px] flex-wrap items-center justify-between xl:px-10 py-2">
        <Link
          href={`/${lang}`}
          className="text-2xl font-semibold flex items-end lg:scale-[1.3]"
        >
          <Image className="w-[45px] translate-y-[3px]" src={logo} alt="logo" />
        </Link>
        <Nav lang={navigation} params={lang} />
        <div className='hidden md:block px-0'><MenuCustomList /></div>
        <NavTel lang={navigation} params={lang} />
      </div>
    </header>
  )
}
