export interface IAchievementsSection {
    page: {
        [key: string]: {
            [key: string]: string;
        };
    };
}

interface Pj {
    [key: string]: string;
}

export interface IProjectsLang {
    title: string;
    more: string;
    pj1: Pj;
    pj2: Pj;
    pj3: Pj;
}

export interface IContactLang {
    title: string;
    desc: string;
    contactForm: Pj;
}

export interface ContactForm {
    name: string;
    namePlac: string;
    email: string;
    subject: string;
    subjectPlac: string;
    message: string;
    messagePlac: string;
    btn: string;
}


export interface IAboutLang {
    title: string;
    description: string;
    blockTab: BlockTab;
}
interface BlockTab {
    title1: string;
    title2: string;
    title3: string;
    title2Desc: Title2Desc;
    title3Desc: Title3Desc;
}
interface Title3Desc {
    [key: string]: string;
}
interface Title2Desc {
    text1: string;
}




