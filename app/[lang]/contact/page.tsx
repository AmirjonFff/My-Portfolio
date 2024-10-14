import GithubIcon from "../../../public/github-icon.svg";
import InstIcon from "../../../public/ins_img.png";
import LiIcon from "../../../public/linkedin-icon.svg";
import TgIcon from "../../../public/tg_icon.png";
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
        <div className="flex items-center min-h-screen lg:overflow-hidden">
            <section
                id="contact"
                className="container relative grid py-16 md:grid-cols-2 lg:py-24 xl:px-14 2xl:px-32 md:gap-8"
            >
                <div className="hidden bg_gradient md:block -bottom-60 -left-80"></div>
                <div className="relative z-10 mb-10">
                    <h5 className="my-2 text-3xl font-bold text-white lg:text-4xl">
                        {contact.title}
                    </h5>
                    <p className="text-[#ADB7BE] mt-2 md:mt-5 m max-w-md text-base lg:text-xl">
                        {contact.desc}
                    </p>
                    <div className="text-[#ADB7BE] text-lg mt-2 flex flex-col lg:flex-row gap-2 lg:gap-10">
                        <div className="">
                            <EnvelopeIcon className="inline w-6" /> amirjonif@gmail.com
                        </div>
                        <div className="">
                            <PhoneIcon className="inline w-6" /> +992 91 744 75 17
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mt-4 socials">
                        <Link href="https://github.com/AmirjonFff">
                            <Image src={GithubIcon} alt="Github Icon" />
                        </Link>
                        <Link href="https://www.instagram.com/af.tjk/">
                            <Image className="w-[38px]" src={InstIcon} alt="Instagram Icon" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/%D0%B0%D0%BC%D0%B8%D1%80%D0%B4%D0%B6%D0%BE%D0%BD%D0%B8-%D1%84%D0%B0%D0%B9%D0%B7%D0%BC%D1%83%D1%85%D0%B0%D0%BC%D0%BC%D0%B0%D0%B4-1a7278304/">
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

