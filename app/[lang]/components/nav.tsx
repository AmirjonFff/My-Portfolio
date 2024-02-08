"use client"
import Link from 'next/link'
import React, { useState } from 'react'

interface INav {
    lang: any;
    params: any;
}

function Nav({ lang, params }: INav) {

    const [active, setActive] = useState()

    return (
        <div>
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                <li>
                    <Link className={`text-[#ADB7BE] !text-[18px] hover:text-white ${active === "about" && "text-[white]"}`} href={`/${params}/about`}>{lang.about}</Link>
                </li>
                <li>
                    <Link className={`text-[#ADB7BE] !text-[18px] hover:text-white ${active === "project" && "text-[white]"}`} href={`/${params}/projects`}>{lang.projects}</Link>
                </li>
                <li>
                    <Link className={`text-[#ADB7BE] !text-[18px] hover:text-white ${active === "about" && "text-[white]"}`} href={`/${params}/contact`}>{lang.contact}</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav
