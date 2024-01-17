const Resume = () => {
  return (
    <section className="resume section p-0 pt-24 pb-2">
      <div className="resume__container container grid ">
        <div className="resume__content items-center justify-center flex flex-col m-0 p-0">
            {/* <h3 className="resume__title text-center font-semibold mb-6 text-3xl"> Resume </h3> */}
            <iframe
                src={'./__Edmond_LI_2B_Resume.pdf'}
                frameBorder="0" 
                className="items-centerjustify-center flex md:w-[60%] md:h-[135vh] w-[100%] h-[100vh] rounded-xl bordered shadow-xl"
                title="Resume"
            >
            </iframe>
          </div>
        </div>
    </section>
  )
}

export default Resume;