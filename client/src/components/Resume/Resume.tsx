const Resume = () => {
  return (
    <section className="resume section">
      <div className="resume__container container grid">
        <div className="resume__content items-center justify-center flex flex-col">
            {/* <h3 className="resume__title text-center font-semibold mb-6 text-3xl"> Resume </h3> */}
            <iframe
                src={'./__Edmond_LI_2B_Resume.pdf'}
                frameBorder="0" 
                className="items-centerjustify-center flex w-[75%] h-[80vh] shadow-xl rounded-xl"
            >
            </iframe>
          </div>
        </div>
    </section>
  )
}

export default Resume;