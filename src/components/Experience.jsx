import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Experiences</h2>
      <div className="flex flex-col gap-8 w-3/4 mx-auto  ">
        {EXPERIENCES.map((experience, index) => {
           return <div key={index} className="flex flex-col gap-4 md:flex-row">
            <div className="w-32">
              <p className="font-semibold">{experience.year}</p>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold">
                {experience.role}{" "}
                <span className="text-gray-500 ">@ {experience.company}</span>
              </h3>
              <p className="mt-2 text-stone-400">{experience.description}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-stone-900">
                {experience.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="rounded-full px-3 py-1 text-sm  bg-stone-900 text-stone-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
})}
      </div>
    </div>
  );
};

export default Experience;
