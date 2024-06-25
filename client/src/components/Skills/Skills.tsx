import { SiDotnet, SiPytorch, SiAzuredevops } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { DiMsqlServer } from "react-icons/di";
import { TbBrandRedux } from "react-icons/tb";
import './Skills.css';
import SkillsCard from './SkillsCards/SkillsCard';

interface Skill {
    name: string;
    proficiency: number;
    Icon: JSX.Element;
}

const getYearAsDecimal = (date: Date): number => {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const endOfYear = new Date(date.getFullYear() + 1, 0, 1);
    const daysInYear = (endOfYear.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24);
    const daysSinceStartOfYear = (date.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24);
    return date.getFullYear() + (daysSinceStartOfYear / daysInYear);
};

const roundToNearestFive = (num: number): number => {
    return Math.round(num / 5) * 5;
};

const proficiencyConverter = (date: Date): number => {
    const today = new Date();
    const differenceInYears = getYearAsDecimal(today) - getYearAsDecimal(date);
    
    let proficiency = Math.round((differenceInYears / 5) * 100);
    proficiency = Math.max(0, Math.min(proficiency, 100));
    
    proficiency = roundToNearestFive(proficiency);
    return proficiency;
};


const proficiencyDates = {
    'React' : new Date(2022, 5, 1),
    'JavaScript' : new Date(2019, 12, 1),
    'TypeScript' : new Date(2020, 9, 1),
    'CSS' : new Date(2018, 1, 1),
    'Redux' : new Date(2023, 9, 1),
    'HTML' : new Date(2019, 12, 1),
    'Python' : new Date(2018, 1, 1),
    'Node.js' : new Date(2022, 5, 1),
    '.NET' : new Date(2024, 4, 1),
    'SQL' : new Date(2023, 1, 1),
    'PostgreSQL' : new Date(2023, 9, 1),
    'Git' : new Date(2018, 1, 1),
    'Azure' : new Date(2024, 5, 1),
    'Docker' : new Date(2023, 9, 1),
    'AWS' : new Date(2023, 9, 1),
    'PyTorch' : new Date(2024, 5, 1),
}


const frontEndSkills: Skill[] = [
    {
        name: 'React',
        proficiency: proficiencyDates['React'] ? proficiencyConverter(proficiencyDates['React']) : 0, 
        Icon: <i className="fa-brands fa-react"></i>,
    },
    {
        name: 'JavaScript', 
        proficiency: proficiencyDates['JavaScript'] ? proficiencyConverter(proficiencyDates['JavaScript']) : 0, 
        Icon: <i className="fa-brands fa-js"></i>,
    },
    {
        name: 'TypeScript', 
        proficiency: proficiencyDates['TypeScript'] ? proficiencyConverter(proficiencyDates['TypeScript']) : 0, 
        Icon: <BiLogoTypescript className="h-7 w-6"/>,
    },
    {
        name: 'Redux', 
        proficiency: proficiencyDates['Redux'] ? proficiencyConverter(proficiencyDates['Redux']) : 0, 
        Icon: <TbBrandRedux className="h-7 w-6"/>,
    },
    {
        name: 'HTML/CSS',
        proficiency: proficiencyDates['HTML'] ? proficiencyConverter(proficiencyDates['HTML']) : 0,
        Icon: <i className="fa-brands fa-html5"></i>,
    },
    
];

const backEndSkills: Skill[] = [
    {
        name: 'Python',
        proficiency: proficiencyDates['Python'] ? proficiencyConverter(proficiencyDates['Python']) : 0, 
        Icon: <i className="fa-brands fa-python"></i>,
    },
    {
        name: 'Node.js', 
        proficiency: proficiencyDates['Node.js'] ? proficiencyConverter(proficiencyDates['Node.js']) : 0, 
        Icon: <i className="fa-brands fa-node"></i>,
    },
    {
        name: '.NET', 
        proficiency: proficiencyDates['.NET'] ? proficiencyConverter(proficiencyDates['.NET']) : 0, 
        Icon: <SiDotnet />
        ,
    },
    {
        name: 'MS SQL', 
        proficiency: proficiencyDates['SQL'] ? proficiencyConverter(proficiencyDates['SQL']) : 0, 
        Icon: <DiMsqlServer className="h-7 w-6"/>,
    },
    {
        name: 'PostgreSQL', 
        proficiency: proficiencyDates['PostgreSQL'] ? proficiencyConverter(proficiencyDates['PostgreSQL']) : 0, 
        Icon: <BiLogoPostgresql className="h-7 w-6"/>,
    },
];

const additionalSkills: Skill[] = [
    {
        name: 'Git',
        proficiency: proficiencyDates['Git'] ? proficiencyConverter(proficiencyDates['Git']) : 0, 
        Icon: <FaGithub className="h-6 w-6" />,
    },
    {
        name: 'Azure', 
        proficiency: proficiencyDates['Azure'] ? proficiencyConverter(proficiencyDates['Azure']) : 0, 
        Icon: <SiAzuredevops className="h-6 w-6"/>,
    },
    {
        name: 'Docker',
        proficiency: proficiencyDates['Docker'] ? proficiencyConverter(proficiencyDates['Docker']) : 0,
        Icon: <i className="fa-brands fa-docker"></i>,
    },
    {
        name: 'AWS',
        proficiency: proficiencyDates['AWS'] ? proficiencyConverter(proficiencyDates['AWS']) : 0,
        Icon: <i className="fa-brands fa-aws"></i>,
    },
    {
        name: 'PyTorch',
        proficiency: proficiencyDates['PyTorch'] ? proficiencyConverter(proficiencyDates['PyTorch']) : 0,
        Icon: <SiPytorch className="h-6 w-6"/>,
    },
];

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title text-2xl font-semibold"> Skills </h2>
        <span className="section__subtitle text-sm"> Techincal skills and their experience levels </span>
        <div className="skills_container container grid justify-center gap-x-8">
            <SkillsCard title="Front End" icon={<i className="fa-solid fa-code mr-2"></i>} skills={frontEndSkills} />
            <SkillsCard title="Back End" icon={<i className="fa-solid fa-server mr-2"></i>} skills={backEndSkills} />
            <SkillsCard title="Additional Skills" icon={<i className="fa-solid fa-sheet-plastic mr-2"></i>} skills={additionalSkills} />
        </div>
        <span className="section__subtitle mt-4 text-sm"> More can be found on my resume! </span>
    </section>
  )
};

export default Skills;