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
import agstructura_img from '../../../public/images/projects/agstructura_img.jpg';

async function page({ params: { lang } }: {
    params: { lang: Locale }
}) {

    const { project } = await getDictionary(lang);

    const projectsData = [
        {
            id: 9,
            title: 'Web Structure Company',
            description: project.pj9.desc,
            image: agstructura_img,
            tag: ["All", "Fullstack"],
            gitUrl: "https://github.com/AmirjonFff",
            previewUrl: "",
            technologies: ['React', 'TypeScript', 'Fetch', 'Redux', 'Material-UI', 'JWT', 'Express', 'MongoDB'],
            funcs: project.pj9.funcs,
            opt: project.pj9.opt
        },
        {
            id: 5,
            title: 'MINDS',
            description: project.pj5.desc,
            image: vesto_img,
            tag: ["All", "Fullstack"],
            gitUrl: "https://github.com/AmirjonFff",
            previewUrl: "https://mindstech.io/",
            technologies: ['React', 'TypeScript', 'RTK Query', 'Mantine', 'Tailwind', 'Docker', 'JWT', 'Express', 'Nodemailer', 'MongoDB'],
            funcs: project.pj5.funcs,
            opt: project.pj5.opt
        },
        {
            id: 1,
            title: 'Admin Panel',
            description: project.pj1.desc,
            image: admin_img,
            tag: ["All", "Frontend"],
            gitUrl: "https://github.com/AmirjonFff",
            previewUrl: "https://avesto-jobs-front-admin.vercel.app/",
            technologies: ['React', 'TypeScript', 'RTK Query', 'Yup', 'Draggable', 'Material-UI', 'Tailwind', 'JWT'],
            funcs: project.pj1.funcs,
            opt: project.pj1.opt
        },
        {
            id: 4,
            title: 'Online Store',
            description: project.pj4.desc,
            image: store_img,
            tag: ["All", "Frontend"],
            gitUrl: "https://github.com/AmirjonFff/Online-Store",
            previewUrl: "https://af-online-store.vercel.app/",
            technologies: ['React', 'TypeScript', 'RTK Query', 'Mantine', 'Tailwind'],
            funcs: project.pj4.funcs,
            opt: project.pj4.opt
        },
        {
            id: 8,
            title: '82-Towers Clone',
            description: project.pj8.desc,
            image: towers_img,
            tag: ["All", "Frontend"],
            gitUrl: "https://github.com/AmirjonFff",
            previewUrl: "https://af-82-towers.vercel.app/",
            technologies: ['React', 'TypeScript', 'Tailwind'],
            funcs: project.pj8.funcs,
            opt: project.pj8.opt
        },
        {
            id: 7,
            title: 'Calculator',
            description: project.pj7.desc,
            image: calculator_Img,
            tag: ["All", "Frontend"],
            gitUrl: "https://github.com/AmirjonFff/calculator",
            previewUrl: "https://af-calculator.vercel.app/",
            technologies: ['React', 'JavaScript'],
            funcs: project.pj7.funcs,
            opt: project.pj7.opt
        },
        {
            id: 6,
            title: 'TO DO List',
            description: project.pj6.desc,
            image: todo_img,
            tag: ["All", "Fullstack"],
            gitUrl: "https://github.com/AmirjonFff",
            previewUrl: "https://af-height-todos.vercel.app/",
            technologies: ['React', 'TypeScript', 'Material-tailwind', 'JWT', 'Express', 'MongoDB'],
            funcs: project.pj6.funcs,
            opt: project.pj6.opt
        },
        {
            id: 2,
            title: 'Chat',
            description: project.pj2.desc,
            image: chat_img,
            tag: ["All", "Frontend"],
            gitUrl: "https://github.com/AmirjonFff/chat-socket.io/tree/main",
            previewUrl: "https://amir-chat.onrender.com/chat",
            technologies: ['Nest', 'TypeScript', 'Socket.io', 'Prisma'],
            funcs: project.pj2.funcs,
            opt: project.pj2.opt
        },
    ];

    return (
        <div className='bg-[#17153B] h-screen'>
            <section className="container flex flex-col h-screen pt-20 mx-auto xl:px-16 2xl:px-28">
                <h2 className="outline-1 w-auto sticky text-center text-2xl md:text-4xl font-bold mb-[0.5px] text-white md:mt-4">
                    {project.title}
                </h2>
                <ProjectTab data={projectsData} lang={project.tab} />
            </section>
        </div>
    )
}

export default page
