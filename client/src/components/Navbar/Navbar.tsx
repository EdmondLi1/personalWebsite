import React from 'react';
import './Navbar.css';
import { 
    IconHome,
    IconUser,
    IconFileInvoice,
    IconSend2,
    IconArticle,
    IconX,
    IconGripHorizontal
} from '@tabler/icons-react';

// add the navbar items here
const navItems = [
    {
        name: 'Home',
        icon: <IconHome />,
        link: '#home',
    },
    {
        name: 'About',
        icon: <IconUser />,
        link: '#about',
    },
    {
        name: 'Portfolio',
        icon: <IconFileInvoice />,
        link: '#portfolio',
    },
    {
        name: 'Contact',
        icon: <IconSend2 />,
        link: '#contact',
    },
    {
        name: 'Blog',
        icon: <IconArticle />,
        link: '/blog',
    },
   
]

const Navbar = () => {
    return (
        <header className="header w-full fixed top-0 left-0">
            <nav className="nav flex justify-between items-center gap-x-4 container">
                <a href="index.html" className="nav__logo">
                    Edmond
                </a>

                <div className="nav__menu">
                    <ul className="flex gap-x-8">
                        {navItems.map((item, index) => (
                                <li className="nav__item">
                                    <a href={item.link} className="nav__link flex flex-col items-center">
                                        <div className="nav__icon"> 
                                            {item.icon} 
                                        </div> 
                                        {item.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="nav__close">
                        <IconX />
                    </div>
                </div>
                <div className="nav__toggle">
                    <IconGripHorizontal />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
