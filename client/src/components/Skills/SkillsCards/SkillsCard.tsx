import { Progress } from 'antd';
import React from 'react';

interface Skill {
    name: string;
    proficiency: number;
    Icon: JSX.Element;
};

interface SkillsCardProps {
    title: string;
    icon?: JSX.Element;
    strokeColor?: string;
    skills: Skill[];
};

const splitArrayIntoChunks = (array : Skill[], chunkSize: number) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
};

const SkillsCard:  React.FC<SkillsCardProps> = ({title, icon, strokeColor, skills}) => {
  return (
    <div className="skills__content bg-container-color border px-8 py-14 rounded-xl text-center">
        <h3 className="skills_title font-semibold mb-6 text-center">{icon} {title}</h3>
        <div className="skills__box flex justify-center gap-x-10">
            {splitArrayIntoChunks(skills, 2).map((chunk) => (
                 <div className="skills__group grid gap-y-4 items-start">
                 {chunk.map((item) => (
                      <div className="skills__data flex gap-x-2 items-center ">
                         <div>
                             <h3 className="skills__name inline-flex gap-x-2 font-medium items-center"> <div className='text-xl'>{item.Icon}</div> {item.name} </h3>
                             <span className="skills__level flex flex-col items-center">
                                <Progress percent={item.proficiency} steps={5} showInfo={false} strokeColor={strokeColor || '#6b7280'} />
                                <span className="progress-text">{5 * item.proficiency / 100} years</span>
                            </span>
                         </div>
                     </div>
                 ))}
             </div>
            ))}
        </div>
    </div>
  )
};

export default SkillsCard;