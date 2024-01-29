"use client"
import { useState, useTransition } from "react";
import BlockTab from "./blockTab"
import { IAboutLang } from "./IComponents";

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
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: any) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">{lang.title}</h2>
            <p className="text-base lg:text-lg">
                {lang.description}
            </p>
            <BlockTab lang={lang.blockTab} tab={tab} handleTabChange={handleTabChange} />
            <div className="mt-8">
                {TAB_DATA.find((t) => t.id === tab)?.content}
            </div>
        </div>
    )
}

export default MyAbout
