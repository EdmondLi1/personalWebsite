import { IconSend2 } from '@tabler/icons-react';
import { Button } from 'antd';
import React from 'react';


interface ContactCardProps {
    title: string;
    icon: JSX.Element;
    data: string;
    link: string;
}

const ContactCard: React.FC<ContactCardProps> = ({title, icon, data, link}) => {
  return (
    <div className="contact__card bg-container-color border rounded-xl shadow-lg p-4 text-center">
        {icon}
        <h3 className="contact__card-title font-semibold text-title-color">{title}</h3>
        <span className="contact__card-data block text-sm text-text-color mb-3">{data}</span>
        <Button
            className="contact__buton inline-flex items-center justify-center font-semibold text-text-color hover:scale-105 border-title-color"
            size="middle"
            shape="round"
            onClick={() => window.location.href = link}
            icon={<IconSend2 className="w-4 transition-[0.3]"/>}
        >
            Contact
        </Button>
    </div>
  )
}
export default ContactCard;