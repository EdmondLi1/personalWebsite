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
    <div className="contact__card">
        {icon}
        <h3 className="contact__card-title font-semibold">{title}</h3>
        <span className="contact__card-data text-sm">{data}</span>
        <Button
            className="contact__buton inline-flex items-center justify-center font-semibold"
            size="middle"
            shape="round"
            onClick={() => window.location.href = link}
            icon={<IconSend2 className="w-4"/>}
        >
            Contact
        </Button>
    </div>
  )
}
export default ContactCard;