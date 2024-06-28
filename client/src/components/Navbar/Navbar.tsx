import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';
import { 
    IconHome,
    IconList,
    // IconFolderCode,
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
        link: '/#home',
    },
    {
        name: 'Experience',
        icon: <IconList />,  // change icon
        link: '#experience',
    },
    // {
    //     name: 'Portfolio',
    //     icon: <IconFolderCode />,
    //     link: '#portfolio',
    // },
    {
        name: 'Contact',
        icon: <IconSend2 />,
        link: '#contact',
    },
    { 
        name: 'Resume',
        icon: <IconFileInvoice />, // change icon
        link: '/resume', // need this to redirec to the google drive or smth... 
    },
    {
        name: 'Blog',
        icon: <IconArticle />,
        link: '/blog',
    }
]

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const location = useLocation();

    const restrictedPathItems = location.pathname === '/' ? navItems : navItems.filter(item => item.link.includes('/'));

    return (
        <header className="header fixed left-0 top-0 z-fixed w-full bg-container-color shadow-md max-md:bottom-0 max-md:top-auto">
            <nav className="nav container flex items-center justify-between gap-x-4 xl:px-12 max-md:h-header">
                <a href="/" className="nav__logo text-xl font-semibold text-title-color hover:scale-105">
                    Edmond Li
                </a>
                <div className={`${showNav ? `bottom-0`: ``} nav__menu 
                    max-md:fixed max-md:left-0 max-md:w-full max-md:bg-body-color 
                    max-md:pt-6 max-md:pr-4 max-md:pb-10 max-md:rounded-3xl
                    max-phone:pr-1
                    `}>
                    <ul className="nav__list flex gap-x-8 max-md:grid max-md:grid-cols-3 max-md:gap-y-6">
                        {/* map through all the nav items with their list */}
                        {restrictedPathItems.map((item, index) => (
                                <li className="nav__item" key={index}>
                                    <a href={item.link} className="nav__link flex flex-col items-center font-normal text-title-color transition-all hover:scale-110 hover:font-medium hover:text-title-color-dark">
                                        <div className="nav__icon max-md:block"> 
                                            {item.icon} 
                                        </div> 
                                        {item.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="nav__close max-md:absolute max-md:bottom-2 max-md:block max-md:text-title-color"
                        onClick={() => setShowNav(!showNav)}
                    >
                        <IconX />
                    </div>
                </div>
                <div className="nav__toggle hover:text-color-dark text-title-color max-md:block"
                    onClick={() => setShowNav(!showNav)}
                >
                    <IconLayoutDashboard />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
