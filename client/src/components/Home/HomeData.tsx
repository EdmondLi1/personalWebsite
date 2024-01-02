import { Button } from 'antd';
import { IconSend } from '@tabler/icons-react';

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__greeting text-title-color font-bold text-5xl max-md:text-4xl mb-3"> 
        Welcome! :D 
      </h1>
      <h1 className="home__title text-title-color font-semibold text-4xl max-md:text-2xl mb-5"> 
       Edmond Li
      </h1>
      <h3 className="home__subtitle text-subtitle-color font-normal text-sm mb-5 relative">
          CS @ University of Waterloo (AI and Digital Hardware Specilization, Pure Mathematics Minor)
      </h3>
      <a href="#contact">
        <Button
          className="text-align inline-flex items-center justify-center text-sm font-semibold text-title-color hover:text-title-color-dark hover:scale-105 transition-all"
          icon={<IconSend className="w-4"/>}
          size="large"
          shape="round"
        >
          Contact Me
        </Button>
      </a>
    </div>
  )
}

export default Data;