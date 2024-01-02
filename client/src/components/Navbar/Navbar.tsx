import React, { useState } from 'react';
import './Navbar.css';
import { 
    IconHome,
    IconUser,
    IconFileInvoice,
    IconSend2,
    IconArticle,
    IconX,
    IconLayoutDashboard
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
    }
]

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <header className="header w-full bg-container-color fixed top-0 left-0 max-md:top-auto max-md:bottom-0 shadow-md z-fixed">
            <nav className="nav flex justify-between items-center gap-x-4 container max-md:h-header xl:px-12">
                <a href="index.html" className="nav__logo text-title-color font-semibold text-xl">
                    Edmond Li
                </a>
                <div className={`${showNav ? `bottom-0`: ``} nav__menu 
                    max-md:fixed max-md:left-0 max-md:w-full max-md:bg-body-color 
                    max-md:pt-6 max-md:pr-4 max-md:pb-10 max-md:rounded-3xl
                    max-phone:pr-1
                    `}>
                    <ul className="nav__list flex gap-x-8 max-md:grid max-md:grid-cols-3 max-md:gap-y-6">
                        {/* map through all the nav items with their list */}
                        {navItems.map((item, index) => (
                                <li className="nav__item" key={index}>
                                    <a href={item.link} className="nav__link 
                                    text-title-color flex flex-col items-center font-normal
                                    hover:text-title-color-dark hover:scale-105 hover:font-medium transition-all">
                                        <div className="nav__icon max-md:block"> 
                                            {item.icon} 
                                        </div> 
                                        {item.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="nav__close max-md:block max-md:absolute max-md:bottom-2 max-md:text-title-color"
                        onClick={() => setShowNav(!showNav)}
                    >
                        <IconX />
                    </div>
                </div>
                <div className="nav__toggle text-title-color max-md:block hover:text-color-dark"
                    onClick={() => setShowNav(!showNav)}
                >
                    <IconLayoutDashboard />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
