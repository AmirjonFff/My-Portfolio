"use client"
import { useState, useTransition } from "react";
import BlockTab from "./blockTab"
import { IAboutLang } from "./IComponents";
import { CogIcon } from "@heroicons/react/24/outline";

interface IMyAbout {
    TAB_DATA: {
        title: string;
        id: string;
        content: JSX.Element;
    }[];
    lang: IAboutLang
}

function MyAbout({ TAB_DATA, lang }: IMyAbout) {

    const [tab, setTab] = useState("skills");
    const [bitrix, setBitrix] = useState(false);
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: any) => {
        startTransition(() => {
            setTab(id);
        });
    };

    const description = bitrix ? lang.descriptionBitrix : lang.description

    return (
        <div className="relative z-10 flex flex-col h-full mt-4 text-left md:mt-0">
            <div className="hidden -z-10 bg_gradient sm:block -right-64 -bottom-25">
            </div>
            <h2 className="text-xl font-bold text-center text-white xl:text-2xl md:mb-2">{bitrix ? lang.titleBitrix : lang.title}</h2>
            {
                description.split('*').map((el, i) =>
                    <p key={i} className="mt-2 text-base text-justify xl:text-lg">
                        <span className="inline-block w-10"></span>{el}
                    </p>
                )
            }
            {/* <p className="mt-2 text-base text-justify xl:text-lg">
                <span className="inline-block w-10"></span>{lang.btnTitle} <button onClick={() => setBitrix(!bitrix)} className="font-bold text-lg bg-clip-text hover:text-white text-[#ADB7BE]">{!bitrix ? lang.btnDescBitrix : lang.btnDesc}</button><CogIcon className="w-6 inline-block text-[#ADB7BE]" />.
            </p> */}
            {!bitrix && <div>
                <BlockTab lang={lang.blockTab} tab={tab} handleTabChange={handleTabChange} />
                <div className="mt-8 sm:w-[470px] h-[100px] sm:h-[70px] mx-auto">
                    {TAB_DATA.find((t) => t.id === tab)?.content}
                </div>
            </div>}
        </div>
    )
}

export default MyAbout
