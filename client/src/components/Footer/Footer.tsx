import "./Footer.css";

// add the footer items here
const footerItems = [
    {
        name: 'Home',
        link: '#home',
    },
    {
        name: 'Projects',
        link: '#projects',
    },
    {
        name: 'Blog',
        link: '/blog',
    }
];

// add footer socials here
const footerSocials = [
    {
        icon: <i className="fa-brands fa-github text-2xl text-title-color 
            hover:text-title-color-dark transition-all"></i>,
        link: 'https://github.com/EdmondLi1',
    },
    {
        icon: <i className="fa-brands fa-linkedin text-2xl text-title-color 
            hover:text-title-color-dark transition-all"></i>,
        link: 'https://www.linkedin.com/in/edmond-li2004/',
    },
    {
        icon: <i className="fa-brands fa-square-instagram text-2xl text-title-color 
            hover:text-title-color-dark transition-all"></i>,
        link: 'https://www.instagram.com/edmond__li/',
    },
    {
        icon: <i className="fa-brands fa-spotify text-2xl text-title-color 
            hover:text-title-color-dark transition-all"></i>,
        link: 'https://open.spotify.com/user/thenoodlest',
    }
];

const Footer = () => {
  return (
    <footer className="footer w-full bottom-0 left-0 max-md:top-auto max-md:bottom-0 shadow-xl bg-container-color">
        <div className="footer__content pt-8 pb-24">
            <h1 className="text-center text-title-color mb-6 text-3xl font-bold">
                Edmond Li
            </h1>

            <ul className="footer__list flex items-center justify-center space-x-6 mb-6">
                {footerItems.map((item, index) => (
                        <li className="text-title-color font-normal
                                       hover:text-title-color-dark hover:scale-105 transition-all" key={index}>
                            <a href={item.link}>
                                {item.name}
                            </a>
                        </li>
                    ))
                }
            </ul>
            <div className="footer__socials flex justify-center space-x-5">
                {footerSocials.map((item, index) => (
                        <a href={item.link} className="socials__link" key={index}>
                            {item.icon}
                        </a>
                    ))
                }
            </div>
            <span className="footer__copy block mt-8 mb-24 text-center items-center text-sm">
                © 2024 Edmond Li
            </span>
        </div>
    </footer>
  )
};

export default Footer;