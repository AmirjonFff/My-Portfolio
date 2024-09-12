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
        <div className="mt-4 relative z-10 md:mt-0 text-left flex flex-col h-full">
            <div className="-z-10 bg_gradient -right-64 -bottom-25">
            </div>
            <h2 className="text-2xl font-bold text-white mb-2 text-center">{bitrix ? lang.titleBitrix : lang.title}</h2>
            {
                description.split('*').map((el, i) =>
                    <p key={i} className="text-base lg:text-lg mt-2 text-justify">
                        <span className="inline-block w-10"></span>{el}
                    </p>
                )
            }
            <p className="text-base lg:text-lg mt-2 text-justify">
                <span className="inline-block w-10"></span>{lang.btnTitle} <button onClick={() => setBitrix(!bitrix)} className="font-bold text-lg bg-clip-text hover:text-white text-[#ADB7BE]">{!bitrix ? lang.btnDescBitrix : lang.btnDesc}</button><CogIcon className="w-6 inline-block text-[#ADB7BE]" />.
            </p>
            {!bitrix && <div>
                <BlockTab lang={lang.blockTab} tab={tab} handleTabChange={handleTabChange} />
                <div className="mt-8 w-[470px] h-[70px] mx-auto">
                    {TAB_DATA.find((t) => t.id === tab)?.content}
                </div>
            </div>}
        </div>
    )
}

export default MyAbout
