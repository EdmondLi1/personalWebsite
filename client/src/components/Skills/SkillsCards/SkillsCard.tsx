import { Progress } from 'antd';
import React from 'react';

interface Skill {
    name: string;
    proficiency: number;
    Icon: JSX.Element;
}

interface SkillsCardProps {
    title: string;
    icon?: JSX.Element;
    strokeColor?: string;
    skills: Skill[];
}

const SkillsCard: React.FC<SkillsCardProps> = ({ title, icon, strokeColor, skills }) => {
  const isOdd = skills.length % 2 !== 0;
  const lastItemClass = isOdd ? "col-span-2 justify-self-center" : "";

  return (
    <div className="skills__content m-0 rounded-lg border border-gray-300 bg-white px-1 py-4 text-center">
      <div className="skills_title mb-4 flex items-center justify-center gap-x-1 text-lg font-semibold">
        {icon && <div className="text-xl">{icon}</div>}
        <span className="truncate">{title}</span>
      </div>
      <div className="skills__box grid grid-cols-2 justify-items-center gap-4">
        {skills.map((item, index) => (
          <div
            className={`skills__data flex flex-col gap-y-1 items-center text-center ${isOdd && index === skills.length - 1 ? lastItemClass : ""}`}
            key={index}
          >
            <div className="skills__name flex flex-col items-center gap-y-1 font-medium">
              <div className="text-xl">{item.Icon}</div>
              <span className="truncate">{item.name}</span>
            </div>
            <div className="skills__level flex w-full flex-col items-center">
              <div className="w-full max-w-[100px]">
                <Progress 
                  percent={item.proficiency} 
                  steps={5} 
                  showInfo={false} 
                  strokeColor={strokeColor || '#6b7280'} 
                  className="w-full"
                />
              </div>
              <span className="progress-text mt-1 text-sm">
                {5 * item.proficiency / 100}{item.proficiency >= 100 ? "+" : ""} years
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
