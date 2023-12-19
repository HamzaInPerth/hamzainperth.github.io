const xp = [
    {
      "company": "FlightHub, Montreal",
      "position": "Software Engineer",
      "duration": "Mar 2023 - PRESENT",
      "description": "Lead the design and architecture of complex software systems. Collaborated with cross-functional teams to define technical requirements and specifications. Wrote high-quality, efficient, and maintainable code for web applications. Conducted code reviews, and ensured adherence to coding standards. Evaluated and recommended new technologies to enhance development processes."
    },
    {
      "company": "Les Manifestes, Montreal",
      "position": "Full Stack Developer",
      "duration": "Aug 2022 - Jan 2023",
      "description": "Designed, developed, and maintained websites. Implemented content management systems (CMS) for easy client updates. Optimized websites and applications for SEO, improving visibility and ranking. Implemented a CI/CD pipeline using Bitbucket."
    },
    {
      "company": "Biotopia, Paris",
      "position": "Full Stack Developer",
      "duration": "Jan 2021 - Aug 2022",
      "description": "Led a project, including designing and implementing a comprehensive API. Maintained and optimized the database for efficient data storage and retrieval. Reviewed and provided constructive feedback on code contributions from team members. Contributed to the design and development of web applications, emphasizing full-stack development."
    },
    {
      "company": "Vytree, Paris",
      "position": "Software Engineer",
      "duration": "Aug 2019 - Jan 2021",
      "description": "Designed and implemented a QR code-based access automation system, streamlining secure entry processes. Developed a user-friendly interface to generate unique QR codes with access permissions. Enhanced security and simplified access control, replacing traditional methods. Designed and developed company website utilizing Nuxt.js technology for frontend and Strapi as a headless CMS for backend. Implemented a responsive and dynamic web interface, providing seamless user experiences."
    },
    {
      "company": "Spark Pear, Paris",
      "position": "Full Stack Developer",
      "duration": "Oct 2017 - Aug 2019",
      "description": "Contributed to full-stack development projects using Php, Javascript."
    }
  ];

const Experiences = () => {
    return (
        <div >
            <h1 className="my-10 mx-auto w-9/12 pb-10 border-b border-black text-center text-6xl text-slate-100 font-semibold ">Experiences</h1>


            <section className="text-slate-300 flex flex-col gap-y-5">
            {xp.map((x, key) => 
                (<div key={key}>
                    <h3 className="text-2xl font-bold">{x.company} — {x.position}</h3>
                    <span className="text-xs mb-4">{x.duration}</span>
                    <p>{x.description}</p>

                </div>
                )
            )}
        </section>
        </div>
    )
}

export default Experiences