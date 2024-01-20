import { Button } from 'antd';
import { useState } from 'react';
import './Experience.css';

const workExperiences = [
    { 
        title: "Software Engineer", 
        subtitle: "Chatsimple", 
        asset: "",
        description: "Integrated with messenging plaforms such as Whatsapp, Messenger, and Instagram. Created a fullstack white-label automation system for small-medium business clients and increased MMR by 4 times.",
        date: "Sept 2023 - Dec 2023" 
    },
    { 
        title: "Private Tutor", 
        subtitle: "Tutorax, Universiy Tutoring Services, ...", 
        asset: "",
        description: "Tutored over 100+ students in various subjects such as Math, Physics, and Computer Science.",
        date: "May 2020 - Present" 
    },
    // { 
        // title: "Software Engineer", 
        // subtitle: "Chatsimple", 
        // asset: "",
        // description: "Integrated with messenging plaforms such as Whatsapp, Messenger, and Instagram. Enchanced UI/UX with smoother pages and increased MMR by 4 times.",
        // date: "Sept 2023 - Dec 2023" 
    // },
    // ... other work experiences
];

const extracurriculars = [
    { 
        title: "Senior Programming Member", 
        subtitle: "FRC Arctos 6135" , 
        asset: "",
        description: "Developed an autonomous pathfinding algorithm and a grabber mechanism for the robot.", 
        date: "Sept 2020 - Sept 2022" 
    },
    { 
        title: "Logistics Organizer", 
        subtitle: "Tech+", 
        asset: "",
        description: "Promoting in DEI in the tech industry and making tech accessible to everyone :). Aided end-to-end with internal organization and communication to deliver large scale events smooth", 
        date: "Jan 2023 - Present" 
    },    
    { 
        title: "Server Developer", 
        subtitle: "UW CSC", 
        asset: "",
        description: "Maintaining CSC's personal discord bot with over 3000+ users.", 
        date: "Jan 2023 - Present" 
    },
    { 
        title: "Firmware Developer", 
        subtitle: "Waterloop", 
        asset: "",
        description: "", 
        date: "Jan 2023 - Present" 
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
                <div className="experience__tabs flex justify-center md:space-x-4  mb-8">
                    <Button 
                        className={`experience__button max-md:text-xs inline-flex items-center text-title-color ${activeTab === 'work' ? 'text-title-color-dark font-semibold shadow-xl max-md:text-sm' : ''}`}
                        icon={<i className="fa-solid fa-briefcase"></i>}
                        shape="round"
                        onClick={() => handleTabChange('work')}
                    >
                        Work Experience
                    </Button>
                    <Button 
                        className={`experience__button max-md:text-xs inline-flex items-center text-title-color ${activeTab === 'extracurriculars' ? 'text-title-color-dark font-semibold shadow-xl max-md:text-sm' : ''}`} 
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
                            { index % 2 === 0  && 
                                <>
                                    <div></div>
                                    <div>
                                        <span className="experience__rounder inline-block w-[13px] h-[13px] bg-text-color rounded-xl"></span>
                                        { index + 1 !== experiences.length && <span className="experience__line block w-[1px] h-[100%] bg-text-color"></span> }
                                    </div>
                                </>
                            }

                            <div className="flex flex-row items-start">
                                {/* {index % 2 !== 0 && <img src={experience.asset} alt={experience.title} className="experience__img w-[60%]" />} */}
                                <div className="flex flex-col">
                                    <h3 className="experience__title text-lg max-md:text-sm font-semibold text-title-color"> {experience.title} </h3>
                                    <span className="experience__subtitle text-base max-md:text-xs font-medium mb-1 text-title-color"> {experience.subtitle} </span>
                                    <span className="experience__date text-sm max-md:text-xs mb-3 text-text-color"> {experience.date}</span>
                                    <span className="experience__description text-sm max-md:text-xs text-text-color"> {experience.description} </span>
                                </div>
                                {/* {index % 2 === 0 && <img src={experience.asset} alt={experience.title} className="experience__img w-[60%]" />} */}
                            </div>

                            {/* this goes after if odd */}
                            { index % 2 !== 0 &&
                                <>
                                    <div>
                                        <span className="experience__rounder inline-block w-[13px] h-[13px] bg-text-color rounded-xl"></span>
                                        { index + 1 !== experiences.length && <span className="experience__line block w-[1px] h-[100%] bg-text-color"></span> }
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