import { Button } from 'antd';
import { useState } from 'react';
import './Experience.css';

const workExperiences = [
    { 
        title: "Software Engineer", 
        subtitle: "Gyrd", 
        asset: "",
        description: "Fullscale migration, leading to 400% reduction in OER, implemented  CNN network to santized data and categorize leading to 500% faster onboarding workflow",
        date: "May 2024 - Present" 
    },
    { 
        title: "Software Engineer", 
        subtitle: "Chatsimple", 
        asset: "",
        description: "Integrated with Metamessenging plaforms and lead the creation of a fullstack white-label automation system for SMB increased MMR by x4",
        date: "Sep 2023 - Dec 2023" 
    },
    { 
        title: "Private Tutor", 
        subtitle: "Tutorax & Universiy Tutoring Services", 
        asset: "",
        description: "Enhanced communication abilities through clear, concise explanations of topics on Calculus, Linear Algebra, and Statistics",
        date: "May 2020 - Apr 2024" 
    },
    // ... other work experiences
];

const extracurriculars = [
    { 
        title: "Pink Tie - Orientation Leader", 
        subtitle: "University of Waterloo - Faculty of Mathematics", 
        asset: "",
        description: "", 
        date: "Jun 2024 - Present" 
    },
    { 
        title: "GDSC Events & Internal Affairs", 
        subtitle: "UW CSC", 
        asset: "",
        description: "Spearheaded panels with tech leaders and hosting the biggest anticipated event with 300+ members", 
        date: "Jan 2024 - Present" 
    },
    { 
        title: "Fullstack Developer", 
        subtitle: "Tech+", 
        asset: "",
        description: "Established a mentorship portal app, promoting DEI and connecting underrepresented communities towards a tech career", 
        date: "Jan 2023 - Present" 
    },
    { 
        title: "Server Developer", 
        subtitle: "UW CSC", 
        asset: "",
        description: "Maintaining CSC's personal discord bot with over 2000+ users", 
        date: "Jan 2024 - Present" 
    },
    { 
        title: "Events and Logistics Organizer", 
        subtitle: "Tech+", 
        asset: "",
        description: "Promoting in DEI in the tech industry and making tech accessible to everyone :). Aided end-to-end with internal organization and communication to deliver large scale events smooth", 
        date: "Jan 2024 - May 2024" 
    },    
    { 
        title: "Senior Programming Member", 
        subtitle: "FRC Arctos 6135" , 
        asset: "",
        description: "Developed an autonomous pathfinding algorithm and a grabber mechanism for the robot", 
        date: "Sep 2020 - Sep 2022" 
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
                <div className="experience__tabs mb-8 flex justify-center md:space-x-4">
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
                                        <span className="experience__rounder inline-block h-[13px] w-[13px] rounded-xl bg-text-color"></span>
                                        { index + 1 !== experiences.length && <span className="experience__line block h-[100%] w-[1px] bg-text-color"></span> }
                                    </div>
                                </>
                            }

                            <div className="flex flex-row items-start">
                                {/* {index % 2 !== 0 && <img src={experience.asset} alt={experience.title} className="experience__img w-[60%]" />} */}
                                <div className="flex flex-col">
                                    <h3 className="experience__title text-lg font-semibold text-title-color max-md:text-sm"> {experience.title} </h3>
                                    <span className="experience__subtitle mb-1 text-base font-medium text-title-color max-md:text-xs"> {experience.subtitle} </span>
                                    <span className="experience__date mb-3 text-sm text-text-color max-md:text-xs"> {experience.date}</span>
                                    <span className="experience__description text-sm text-text-color max-md:text-xs"> {experience.description} </span>
                                </div>
                                {/* {index % 2 === 0 && <img src={experience.asset} alt={experience.title} className="experience__img w-[60%]" />} */}
                            </div>

                            {/* this goes after if odd */}
                            { index % 2 !== 0 &&
                                <>
                                    <div>
                                        <span className="experience__rounder inline-block h-[13px] w-[13px] rounded-xl bg-text-color"></span>
                                        { index + 1 !== experiences.length && <span className="experience__line block h-[100%] w-[1px] bg-text-color"></span> }
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