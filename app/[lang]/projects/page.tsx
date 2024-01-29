import { Locale } from "@/i18n.config";
import ProjectTab from "../components/projectTab";
import { getDictionary } from "@/lib/dictionary";

async function page({ params: { lang } }: {
    params: { lang: Locale }
}) {

    const { project } = await getDictionary(lang);

    const projectsData = [
        {
            id: 1,
            title: project.pj1.title,
            description: project.pj1.desc,
            image: "https://fotohosting.su/images/2024/01/22/Screenshot-2024-01-22-163352.png",
            tag: ["All", "Web"],
            gitUrl: "https://github.com/AmirjonFff/AvestoJobsFrontAdmin",
            previewUrl: "https://avesto-jobs-front-admin.vercel.app/",
        },
        {
            id: 2,
            title: project.pj2.title,
            description: project.pj2.desc,
            image: "https://fotohosting.su/images/2024/01/22/Screenshot-2024-01-22-173859.png",
            tag: ["All", "Web"],
            gitUrl: "https://github.com/AmirjonFff/chat-socket.io/tree/main",
            previewUrl: "https://amir-chat.onrender.com/chat",
        },
        {
            id: 2,
            title: project.pj3.title,
            description: project.pj3.desc,
            image: "https://fotohosting.su/images/2024/01/23/Screenshot-2024-01-23-092639.png",
            tag: ["All", "Web"],
            gitUrl: "https://github.com/AmirjonFff/chat-socket.io/tree/main",
            previewUrl: "/",
        }
    ];
    return (
        <div className='bg-[#121212] min-h-screen'>
            <section className="projects w-[1300px] mx-auto pb-8 pt-24">
                <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                    {project.title}
                </h2>
                <ProjectTab lang={project} data={projectsData} />
            </section>
        </div>
    )
}

export default page
