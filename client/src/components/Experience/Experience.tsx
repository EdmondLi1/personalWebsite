import { Button } from 'antd';
import { useState } from 'react';
import './Experience.css';

const workExperiences = [
    { 
        title: "Software Engineer", 
        subtitle: "Chatsimple", 
        asset: "",
        description: "Integrated with messenging plaforms such as Whatsapp, Messenger, and Instagram. Enchanced UI/UX with smoother pages and increased MMR by 4 times.",
        date: "Sept 2023 - Dec 2023" 
    },
    { 
        title: "Private Tutor", 
        subtitle: "Tutorax, Universiy Tutoring Services, ...", 
        asset: "",
        description: "Tutored over 100+ students in various subjects such as Math, Physics, and Computer Science.",
        date: "May 2020 - Present" 
    },
    { 
        title: "Software Engineer", 
        subtitle: "Chatsimple", 
        asset: "",
        description: "Integrated with messenging plaforms such as Whatsapp, Messenger, and Instagram. Enchanced UI/UX with smoother pages and increased MMR by 4 times.",
        date: "Sept 2023 - Dec 2023" 
    },
    // ... other work experiences
];

const extracurriculars = [
    { 
        title: "Logistics and Programming Member", 
        subtitle: "FRC 6135", 
        asset: "",
        description: "", 
        date: "Sept 2020 - Sept 2022" 
    },
    { 
        title: "Club President", 
        subtitle: "Robotics Club", 
        asset: "",
        description: "", 
        date: "Sep 2020 - Jun 2021" 
    },
   
    // ... other extracurriculars
];


const Experience = () => {
    const [activeTab, setActiveTab] = useState('work');
    const [experiences, setExperiences] = useState(workExperiences);

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        setExperiences(tab === 'work' ? workExperiences : extracurriculars);
    };

    return (
        <section className="experience section" id="experience">
            <h2 className="section__title text-2xl font-semibold"> Experience </h2>
            <span className="section__subtitle text-sm"> My personal journey</span>

            <div className="experience__container container">
                <div className="experience__tabs flex space-x-4 justify-center mb-8">
                    <Button 
                        className={`inline-flex items-center text-title-color hover:scale-105 ${activeTab === 'work' ? 'text-title-color-dark font-bold shadow-xl text-base' : ''}`}
                        icon={<i className="fa-solid fa-briefcase"></i>}
                        shape="round"
                        onClick={() => handleTabChange('work')}
                    >
                        Work Experience
                    </Button>
                    <Button 
                        className={`inline-flex items-center text-title-color hover:scale-105 ${activeTab === 'extracurriculars' ? 'text-title-color-dark font-bold shadow-xl text-base' : ''}`} 
                        icon={<i className="fa-solid fa-graduation-cap"></i>}
                        shape="round"
                        onClick={() => handleTabChange('extracurriculars')}
                    >
                        Extracurriculars
                    </Button>
                </div>

                <div className="experience__sections grid justify-center">
                    <div className="experience__content block">
                        {experiences.map((experience, index) => (
                        <div className="experience__data grid gap-x-6" key={index}>

                            {/* this goes after if even */}
                            { index % 2 === 0 && 
                                <>
                                    <div></div>
                                    <div>
                                        <span className="experience__rounder inline-block w-[13px] h-[13px] bg-text-color rounded-xl"></span>
                                        <span className="experience__line block w-[1px] h-[100%] bg-text-color"></span>
                                    </div>
                                </>
                            }

                            <div className="flex flex-row items-start">
                                {/* {index % 2 !== 0 && <img src={experience.asset} alt={experience.title} className="experience__img w-[60%]" />} */}
                                <div className="flex flex-col">
                                    <h3 className="experience__title text-lg font-semibold"> {experience.title} </h3>
                                    <span className="experience__subtitle text-base font-medium mb-1"> {experience.subtitle} </span>
                                    <span className="experience__date text-sm mb-3"> {experience.date}</span>
                                    <span className="experience__description text-sm"> {experience.description} </span>
                                </div>
                                {/* {index % 2 === 0 && <img src={experience.asset} alt={experience.title} className="experience__img w-[60%]" />} */}
                            </div>

                            {/* this goes after if odd */}
                            { index % 2 !== 0 &&
                                <>
                                    <div>
                                    <span className="experience__rounder inline-block w-[13px] h-[13px] bg-text-color rounded-xl"></span>
                                    <span className="experience__line block w-[1px] h-[100%] bg-text-color"></span>
                                    </div>
                                </>
                            }
                        </div>
                        ))}
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Experience;