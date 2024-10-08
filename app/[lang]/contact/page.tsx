import GithubIcon from "../../../public/github-icon.svg";
import InstIcon from "../../../public/ins_img.png";
import LiIcon from "../../../public/linkedin-icon.svg";
import TgIcon from "../../../public/tg2_icon.png";
import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";
import Image from "next/image";
import FormContact from "../components/formContact";
import { Locale } from "@/i18n.config";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";


async function page({ params: { lang } }: {
    params: { lang: Locale }
}) {
    const { contact } = await getDictionary(lang)
    return (
        <div className="flex min-h-screen lg:overflow-hidden items-center">
            <section
                id="contact"
                className="grid container md:grid-cols-2 py-16 lg:py-24 xl:px-14 2xl:px-32 md:gap-8 relative"
            >
                <div className="bg_gradient hidden md:block -bottom-60 -left-80"></div>
                <div className="mb-10 relative z-10">
                    <h5 className="text-3xl lg:text-4xl font-bold text-white my-2">
                        {contact.title}
                    </h5>
                    <p className="text-[#ADB7BE] mt-2 md:mt-5 m max-w-md text-base lg:text-xl">
                        {contact.desc}
                    </p>
                    <div className="text-[#ADB7BE] text-lg mt-2 flex flex-col lg:flex-row gap-2 lg:gap-10">
                        <div className="">
                            <EnvelopeIcon className="w-6 inline" /> amirjonif@gmail.com
                        </div>
                        <div className="">
                            <PhoneIcon className="w-6 inline" /> +992 91 744 75 17
                        </div>
                    </div>
                    <div className="socials flex items-center mt-4 gap-2">
                        <Link href="https://github.com/AmirjonFff">
                            <Image src={GithubIcon} alt="Github Icon" />
                        </Link>
                        <Link href="https://www.instagram.com/af.tjk/">
                            <Image className="w-[38px]" src={InstIcon} alt="Instagram Icon" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/aking-undefined-1a7278304/">
                            <Image className="w-[45px]" src={LiIcon} alt="Linkedin Icon" />
                        </Link>
                        <Link href="tg://resolve?domain=aking_0102">
                            <Image className="w-[42px]" src={TgIcon} alt="Telegram Icon" />
                        </Link>
                    </div>
                </div>
                <FormContact lang={contact.contactForm} />
            </section>
        </div>
    );
};

export default page;

