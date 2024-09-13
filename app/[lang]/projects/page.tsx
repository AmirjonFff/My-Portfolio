import { Locale } from "@/i18n.config";
import ProjectTab from "../components/projectTab";
import { getDictionary } from "@/lib/dictionary";
import admin_img from '../../../public/images/projects/admin_img.png';
import chat_img from '../../../public/images/projects/chat_img.png';
import store_img from '../../../public/images/projects/store.png';
import vesto_img from '../../../public/images/projects/vesto_img.png';
import todo_img from '../../../public/images/projects/todo_img.png';
import calculator_Img from '../../../public/images/projects/calculator_Img.png';
import towers_img from '../../../public/images/projects/82towers_img.png';

async function page({ params: { lang } }: {
    params: { lang: Locale }
}) {

    const { project } = await getDictionary(lang);

    const projectsData = [
        {
            id: 7,
            title: project.pj7.title,
            description: project.pj7.desc,
            image: calculator_Img,
            tag: ["All", "Web"],
            gitUrl: "https://github.com/AmirjonFff/calculator",
            previewUrl: "https://af-calculator.vercel.app/",
        },
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
        },
        {
            id: 6,
            title: project.pj6.title,
            description: project.pj6.desc,
            image: todo_img,
            tag: ["All", "Web"],
            gitUrl: "https://github.com/AmirjonFff",
            previewUrl: "https://af-height-todos.vercel.app/",
        },
        {
            id: 8,
            title: project.pj8.title,
            description: project.pj8.desc,
            image: towers_img,
            tag: ["All", "Web"],
            gitUrl: "https://github.com/AmirjonFff/82-TOWERS_mySecondTsProject",
            previewUrl: "https://82towers.tj/",
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
    ];
    
    return (
        <div className='bg-[#17153B] h-screen'>
            <section className="container xl:px-16 2xl:px-28 flex flex-col h-screen mx-auto pt-20">
                <h2 className="txt_bottom w-auto sticky text-center text-2xl md:text-4xl font-bold text-white md:mt-4 mb-6 md:mb-3">
                    {project.title}
                    {/* <ChevronDownIcon strokeWidth={2} className="project_icon" /> */}
                </h2>
                <ProjectTab data={projectsData} />
            </section>
        </div>
    )
}

export default page
