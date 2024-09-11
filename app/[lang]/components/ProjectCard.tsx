import { ArrowDownIcon, ArrowUpIcon, CodeBracketIcon, EyeIcon, GiftTopIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface IProjectCard {
    imgUrl: string;
    title: string;
    description: string;
    gitUrl: string;
    previewUrl: string
}

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }: IProjectCard) => {
    const [ismore, setMore] = useState(false)

    const handleMore = () => setMore(!ismore)
    return (
        <div className="bg-[#100e2b] relative p-2 rounded-md pb-7">
            <div
                className="h-52 md:h-72 rounded-t-xl relative group"
            >
                <Image src={imgUrl} className="w-full h-[100%] object-contain" alt=""></Image>
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#0e0c24] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
                    <Link
                        href={gitUrl}
                        className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                    >
                        <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                    </Link>
                    <Link
                        href={previewUrl}
                        className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                    >
                        <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                    </Link>
                </div>
            </div>
            <div className="text-white flex flex-col items-start rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
                <div className="flex justify-between w-full items-center">
                    <h5 onClick={handleMore} className="text-xl cursor-pointer font-semibold mb-2">{title}</h5>
                    {ismore ? <ArrowUpIcon onClick={handleMore} className="w-6 text-[#87CEEB] cursor-pointer" /> : <ArrowDownIcon onClick={handleMore} className="w-6 text-[#87CEEB] cursor-pointer" />}
                </div>
                <p className="text-[#ADB7BE]">{ismore ? description : description.slice(0, 50)}{!ismore && '...'}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
