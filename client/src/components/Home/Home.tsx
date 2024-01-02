import { Icon } from '@iconify/react';
import HomeData from './HomeData';
import './Home.css';

// home socials
const homeSocials = [
    {
      icon: <Icon icon="simple-icons:devpost" className="text-xl md:mb-1.5 text-title-color 
      hover:text-title-color-dark hover:scale-105 transition-all" />,
      link: 'https://devpost.com/liedmond0527',
    },
    {
      icon: <i className="fa-brands fa-github text-lg ml-[2px] text-title-color 
          hover:text-title-color-dark hover:scale-105 transition-all"></i>,
      link: 'https://github.com/EdmondLi1',
    },
    {
      icon: <i className="fa-brands fa-linkedin text-lg ml-[3px] text-title-color 
          hover:text-title-color-dark hover:scale-105 transition-all"></i>,
      link: 'https://www.linkedin.com/in/edmond-li2004/',
    } 
];

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content max-md:flex max-md:flex-col md:flex items-center justify-center pt-22 gap-x-8">
            <div className="home__social grid gap-y-1 items-center max-md:flex max-md:flex-row max-md:justify-center">
              {homeSocials.map((item, index) => (
                    <a href={item.link} className="socials__link" key={index}>
                        {item.icon}
                    </a>
                  ))
                }
            </div>
            <img src="./EDMOND_PROFILE.jpg" alt="Edmond Li" className="home__img shadow-2xl rounded-full"/>
            <div className="home__data">
                <HomeData />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Home;