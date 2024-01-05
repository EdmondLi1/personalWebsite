import { SiMicrosoftoffice, SiLatex } from "react-icons/si";
import './Skills.css';
import SkillsCard from './SkillsCards/SkillsCard';

interface Skill {
    name: string;
    proficiency: number;
    Icon: JSX.Element;
};

const frontEndSkills: Skill[] = [
    {
        name: 'React',
        proficiency: 40, 
        Icon: <i className="fa-brands fa-react"></i>,
    },
    {
        name: 'TS/JS', 
        proficiency: 70, 
        Icon: <i className="fa-brands fa-js"></i>,
    },
    {
        name: 'CSS', 
        proficiency: 40, 
        Icon: <i className="fa-brands fa-css3-alt"></i>,
    },
    {
        name: 'HTML',
        proficiency: 70,
        Icon: <i className="fa-brands fa-html5"></i>,
    },
];

const backEndSkills: Skill[] = [
    {
        name: 'Python',
        proficiency: 100, 
        Icon: <i className="fa-brands fa-python"></i>,
    },
    {
        name: 'Node.js', 
        proficiency: 40, 
        Icon: <i className="fa-brands fa-node"></i>,
    },
    {
        name: 'Java', 
        proficiency: 60, 
        Icon: <i className="fa-brands fa-java"></i>,
    },
    {
        name: 'P.G/SQL', 
        proficiency: 20, 
        Icon: <i className="fa-solid fa-database"></i>,
    },
];

const additionalSkills: Skill[] = [
    {
        name: 'MS Off.',
        proficiency: 50, 
        Icon: <SiMicrosoftoffice  />,
    },
    {
        name: 'LaTeX', 
        proficiency: 60, 
        Icon: <SiLatex />,
    },
    {
        name: 'Docker',
        proficiency: 20,
        Icon: <i className="fa-brands fa-docker"></i>,
    },
    {
        name: 'AWS',
        proficiency: 20,
        Icon: <i className="fa-brands fa-aws"></i>,
    },
];

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title text-2xl font-semibold"> Skills </h2>
        <span className="section__subtitle text-sm"> Techincal level</span>
        <div className="skills_container container grid justify-center gap-x-8">
            <SkillsCard title="Front End" icon={<i className="fa-solid fa-code"></i>} skills={frontEndSkills} />
            <SkillsCard title="Back End" icon={<i className="fa-solid fa-server"></i>} skills={backEndSkills} />
            <SkillsCard title="Additional Skills" icon={<i className="fa-solid fa-sheet-plastic"></i>} skills={additionalSkills} />
        </div>
    </section>
  )
};

export default Skills;