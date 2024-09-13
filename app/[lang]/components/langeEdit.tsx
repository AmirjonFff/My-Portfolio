'use client'

import { i18n } from '@/i18n.config';
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Menu,
  MenuHandler,
  MenuList
} from "@material-tailwind/react";
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import taj from '../../../public/images/taj.jpg'
import rus from '../../../public/images/rus.png'
import eng from '../../../public/images/eng.webp'


export function MenuCustomList() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  const imgs = [
    {
      id: 'taj',
      img: taj,
    },
    {
      id: 'ru',
      img: rus,
    },
    {
      id: 'en',
      img: eng,
    },
  ]

  const lang = pathName.split('/')[1];

  return (
    <Menu open={openMenu} handler={setOpenMenu} allowHover>
      <MenuHandler className='py-0 px-0 text-white flex items-center gap-1'>
        <Button
          className="flex items-center gap-3 text-lg font-normal uppercase tracking-normal"
        >
          {lang}
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 text-[#00FFFF] transition-transform ${openMenu ? "rotate-180" : ""
              }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="relative border-[#33353F] z-50 bg-[#131131] py-1 -translate-y-4 overflow-visible">
        <div>
          <ul className='flex flex-col gap-1'>
            {i18n.locales.map(locale => {
              return (
                <li key={locale} className=''>
                  <Link
                    href={redirectedPathName(locale)}
                    className={`rounded-md flex items-center justify-between px-2 gap-2 ${locale === lang ? "" : ""} text-lg text-white`}
                  >
                    {locale}
                    <div className='w-[25px]'>
                      <Image src={imgs.find(el => el.id === locale)?.img ?? ''} alt="img" />
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </MenuList>
    </Menu>
  );
}