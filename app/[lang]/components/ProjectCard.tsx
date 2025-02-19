import {
    ArrowDownIcon,
    ArrowUpIcon,
    CodeBracketIcon,
    EyeIcon,
    CubeTransparentIcon,
    LanguageIcon,
    ShieldCheckIcon
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface IProjectCard {
    image: string;
    title: string;
    description: string;
    gitUrl: string;
    previewUrl: string;
    technologies: string[];
    funcs: { [key: string]: string },
    opt: string
}

const ProjectCard = ({ image, title, description, gitUrl, previewUrl, technologies, funcs, opt }: IProjectCard) => {
    const [isMore, setMore] = useState(false);

    const handleMore = () => setMore(!isMore);
    const funcsMap = Object.values(funcs ?? {});

    return (
        <div className="bg-[#100e2b] relative rounded-lg pb-5 shadow-md border overflow-hidden border-[#1d1b3f]">
            <div className="relative h-48 overflow-hidden group">
                <Image src={image} className="object-cover w-full h-full" alt={title} />
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#0e0c24] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
                    <Link
                        href={gitUrl}
                        className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                    >
                        <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                    </Link>
                    <Link
                        href={previewUrl}
                        target="_blank"
                        about="blank"
                        rel="noopener noreferrer"
                        className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                    >
                        <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                    </Link>
                </div>
            </div>

            <div className="flex flex-col items-start px-4 mt-4 text-white rounded-b-lg">
                <div className="flex items-center justify-between w-full">
                    <h5 onClick={handleMore} className="mb-2 font-semibold cursor-pointer md:text-xl lg:text-lg xl:text-xl">
                        {title}
                    </h5>
                    {isMore ? (
                        <ArrowUpIcon onClick={handleMore} className="w-[22px] text-[#87CEEB] cursor-pointer" />
                    ) : (
                        <ArrowDownIcon onClick={handleMore} className="w-[22px] text-[#87CEEB] cursor-pointer" />
                    )}
                </div>

                <p className="text-[#ADB7BE] text-sm md:text-base">
                    {isMore ? description : description.slice(0, description.indexOf('.')) + "."}
                </p>

                {/* Technologies */}
                <div className="mt-3">
                    {isMore && <h6 className="text-[#87CEEB] font-medium">🛠️ Технологический стек:</h6>}
                    <div className="flex flex-wrap gap-2 mt-1">
                        {technologies?.map((tech, index) => (
                            <span key={index} className="bg-[#1d1b3f] px-2 py-1 text-xs rounded-md">{tech}</span>
                        ))}
                    </div>
                </div>

                {/* Features */}
                {isMore && (
                    <div className="mt-4">
                        <h6 className="text-[#87CEEB] font-medium">🚀 Основной функционал:</h6>
                        <ul className="list-none mt-2 text-sm text-[#ADB7BE] space-y-1">
                            {funcsMap.map((func, i) =>
                                <li key={i} className="flex items-center">
                                    ✅ {func}
                                </li>
                            )}
                        </ul>
                    </div>
                )}

                {/* Experience */}
                {isMore && (
                    <div className="mt-4">
                        <h6 className="text-[#87CEEB] font-medium">🎯 Полученный опыт:</h6>
                        <p className="text-sm text-[#ADB7BE]">
                            {opt}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
