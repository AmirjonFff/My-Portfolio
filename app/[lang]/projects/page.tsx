import { Locale } from "@/i18n.config";
import ProjectTab from "../components/projectTab";
import { getDictionary } from "@/lib/dictionary";
import admin_img from '../../../public/images/projects/admin_img.png';
import chat_img from '../../../public/images/projects/chat_img.png';
import store_img from '../../../public/images/projects/store.png';
import portfolio_img from '../../../public/images/projects/portfolio_img.png';
import vesto_img from '../../../public/images/projects/vesto_img.png';

async function page({ params: { lang } }: {
    params: { lang: Locale }
}) {

    const { project } = await getDictionary(lang);

    const projectsData = [
        {
            id: 1,
            title: project.pj1.title,
            description: project.pj1.desc,
            image: admin_img,
            tag: ["All", "Web"],
            gitUrl: "https://github.com/AmirjonFff/AvestoJobsFrontAdmin",
            previewUrl: "https://avesto-jobs-front-admin.vercel.app/",
        },
        {
            id: 2,
            title: project.pj2.title,
            description: project.pj2.desc,
            image: chat_img,
            tag: ["All", "Web"],
            gitUrl: "https://github.com/AmirjonFff/chat-socket.io/tree/main",
            previewUrl: "https://amir-chat.onrender.com/chat",
        },
        {
            id: 3,
            title: project.pj3.title,
            description: project.pj3.desc,
            image: portfolio_img,
            tag: ["All", "Web"],
            gitUrl: "https://github.com/AmirjonFff/chat-socket.io/tree/main",
            previewUrl: "/",
        },
        {
            id: 4,
            title: project.pj4.title,
            description: project.pj4.desc,
            image: store_img,
            tag: ["All", "Web"],
            gitUrl: "https://github.com/AmirjonFff/Online-Store",
            previewUrl: "https://af-online-store.vercel.app/",
        },
        {
            id: 5,
            title: project.pj5.title,
            description: project.pj5.desc,
            image: vesto_img,
            tag: ["All", "Web"],
            gitUrl: "https://github.com/AmirjonFff",
            previewUrl: "https://af-vesto.vercel.app/",
        }
    ];
    return (
        <div className='bg-[#121212] min-h-screen'>
            <section className="projects max-w-[1300px] px-5 mx-auto pb-8 pt-24">
                <h2 className="text-center text-4xl font-bold text-white mt-1 md:mt-4 mb-8 md:mb-12">
                    {project.title}
                </h2>
                <ProjectTab lang={project} data={projectsData} />
            </section>
        </div>
    )
}

export default page
