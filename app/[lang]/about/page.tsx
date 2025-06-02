import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";
import about_img from '../../../public/images/about.jpg'
import Image from "next/image";
import dynamic from 'next/dynamic';

const AboutSection = async ({ params: { lang } }: {
  params: { lang: Locale }
}) => {

  const { about } = await getDictionary(lang)
  const { blockTab }: any = about;

  interface ITAB_DATA {
    title: string;
    id: string;
    content: JSX.Element;
  }[]

  const TAB_DATA: ITAB_DATA[] = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="pl-2 list-disc">
          <li>HTML & CSS</li>
          <li>JavaScript & TypeScript</li>
          <li>React & Next</li>
          <li>Express & Nest</li>
          <li>MongoDB & PostgreSQL</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="pl-2 list-disc">
          <li>{blockTab.title2Desc.text1}</li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="pl-2 list-disc">
          <li>{blockTab.title3Desc.text1}</li>
          <li>{blockTab.title3Desc.text2}</li>
        </ul>
      ),
    },
  ];

  const DynamicComponent = dynamic(() => import('../components/myAbout'), {
    loading: () => <p>Loading...</p>,
  });

  return (
    <section className="flex items-center min-h-screen overflow-hidden text-white" id="about">
      <div className="container relative items-center px-4 py-16 mx-auto md:grid lg:grid-cols-2 md:py-20 md:px-20 lg:px-0 lg:py-24 xl:px-14 2xl:px-32 xl:gap-20">
        <Image src={about_img} className="mt-[100px] hidden lg:block relative z-20 md:mt-0 w-[84%]" alt="about_img" />
        <DynamicComponent TAB_DATA={TAB_DATA} lang={about} />
      </div>
    </section>
  );
};

export default AboutSection;
