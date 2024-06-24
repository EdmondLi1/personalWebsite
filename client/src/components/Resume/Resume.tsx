const Resume = () => {
  return (
    <section className="resume section p-0 pb-4 pt-24">
      <div className="resume__container container grid">
        <div className="resume__content m-0 flex flex-col items-center justify-center p-0">
            {/* <h3 className="resume__title mb-6 text-center text-3xl font-semibold"> Resume </h3> */}
            <iframe
                src={'./Edmond_Li_Resume.pdf'}
                frameBorder="0" 
                className="items-centerjustify-center bordered flex h-[100vh] w-[100%] rounded-xl shadow-xl md:h-[135vh] md:w-[60%]"
                title="Resume"
            >
            </iframe>
          </div>
        </div>
    </section>
  )
}

export default Resume;