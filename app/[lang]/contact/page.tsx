import GithubIcon from "../../../public/github-icon.svg";
import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";
import Image from "next/image";
import FormContact from "../components/formContact";
import { Locale } from "@/i18n.config";


const page = async ({ params: { lang } }: {
    params: { lang: Locale }
}) => {
    const { contact } = await getDictionary(lang)
    return (
        <div className="flex h-screen items-center">
            <section
                id="contact"
                className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative w-[1300px] m-auto"
            >
                <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
                <div className="z-10">
                    <h5 className="text-xl font-bold text-white my-2">
                        {contact.title}
                    </h5>
                    <p className="text-[#ADB7BE] mb-4 max-w-md">
                        {contact.desc}
                    </p>
                    <div className="socials flex items-center gap-2">
                        <Link href="https://github.com/AmirjonFff">
                            <Image src={GithubIcon} alt="Github Icon" />
                        </Link>
                        <Link href="https://www.instagram.com/amin.khuroson/">
                            <img width={"40px"} src="https://fotohosting.su/images/2024/01/25/ecf9206164511a009ec7744f055eb592-removebg-preview-1.png" alt="Linkedin Icon" />
                        </Link>
                    </div>
                </div>
                <FormContact lang={contact.contactForm} />
            </section>
        </div>
    );
};

export default page;

