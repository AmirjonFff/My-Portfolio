import TabButton from "./TabButton"

interface ITabButton {
    tab: string;
    handleTabChange: (id: any) => void;
    lang: any;
}

function BlockTab({ tab, handleTabChange, lang }: ITabButton) {
    return (
        <div className="flex flex-row justify-start mt-8">
            <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
            >
               {lang.title1}
            </TabButton>
            <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
            >
                {lang.title2}
            </TabButton>
            <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
            >
                {lang.title3}
            </TabButton>
        </div>
    )
}

export default BlockTab
