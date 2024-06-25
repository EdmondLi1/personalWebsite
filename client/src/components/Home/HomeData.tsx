import { Button } from 'antd';
import { IconSend } from '@tabler/icons-react';

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__greeting mb-3 text-5xl font-bold text-title-color max-md:text-4xl"> 
        Welcome 😄 
      </h1>
      <h1 className="home__title mb-5 text-4xl font-semibold text-title-color max-md:text-2xl"> 
       I'm Edmond Li!
      </h1>
      <h3 className="home__subtitle text-subtitle-color relative mb-5 text-sm font-normal">
          CS @ University of Waterloo (AI and Digital Hardware Specilization, Pure Mathematics Minor)
      </h3>
      <a href="#contact">
        <Button
          className="text-align inline-flex items-center justify-center text-base font-semibold text-title-color transition-all hover:scale-105 hover:text-title-color-dark"
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