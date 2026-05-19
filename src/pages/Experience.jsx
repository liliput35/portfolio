import Navbar from "../components/Navbar";
import MainFooter from "../components/MainFooter"

export default function Experience(){

    const experiences = [
        {
            id: 1, 
            experience_name: "Frontend Officer", 
            experience_org: "Google Developer Groups on Campus USLS", 
            experience_date: "Present", 
            experience_desc: "Collaborated in developing a promotional events website"
        }, 
        {
            id: 2, 
            experience_name: "BS Computer Science ", 
            experience_org: "University of St. La Salle", 
            experience_date: "Present", 
            experience_desc: "Currently learning Computer Science through a 4 year course"
        }, 
        {
            id: 3, 
            experience_name: "STEM Engineering Senior High School", 
            experience_org: "St. John's Institute", 
            experience_date: "May 2023", 
            experience_desc: "Graduated with High Honors"
        }, 
        {
            id: 4, 
            experience_name: "Coding Course Completer", 
            experience_org: "Scrimba", 
            experience_date: "October 2021", 
            experience_desc: "Completed two online courses in JavaScript and React at scrimba.com"
        }, 
        {
            id: 5, 
            experience_name: "Junior High School Completer", 
            experience_org: "St. John's Institute", 
            experience_date: "May 2021", 
            experience_desc: "Completed 10th grade with a general average of A-"
        }, 
    ];

    return(
        <>
            <Navbar name="Lorenz Ciocon"/>

            <main className="font-poppins pb-9">
                <div className="container w-[90%] md:w-4/5 mx-auto md:max-w-350">
                    <h2 className='text-5xl font-semibold mt-16 mb-4 animate-fadeUpBlur'>Experience</h2>
                    <h4 className='text-xl mb-8 animate-fadeUpBlur text-[#1a461e]'>My journey as an aspiring software engineer</h4>

                    <div className="experience-container before:opacity-0 before:animate-fadeUpBlur relative before:absolute before:content-[''] before:w-1.25 before:h-full py-4 pl-8 before:left-0 before:top-0 before:bg-[#648b68]">
                        {experiences.map((experience, i) => (
                            <div className="exp opacity-0 animate-fadeUpBlur relative after:absolute after:content-[''] after:w-4 after:h-4 after:bg-[#1a461e] after:-left-9.25 after:top-1" key={experience.id} style={{ animationDelay: `${ 0.3+ i * 0.1}s` }}>
                                <p className="text-sm md:text-md text-gray-500">{experience.experience_date}</p>
                                <h3 className="text-xl md:text-2xl">{experience.experience_name}, <span className="font-semibold">{experience.experience_org}</span></h3>
                                <p className="text-md md:text-lg mb-6">{experience.experience_desc}</p>
                            </div>
                            
                        ))}
                    </div>

                </div>
            </main>

            <MainFooter/>
        </>
    );
}