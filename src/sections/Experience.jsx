import { memo } from 'react';
import { workExperiences, EducationExperiences } from '../constants/index.js';

const WorkExperience = () => {
  return (
    <section className="c-space my-20 mt-32" id="experience">
      <div className="w-full text-white-600">
        <p className="head-text">Experience & Education</p>
        <div className="work-container">
          <ExperienceList title="Work Experience" experiences={workExperiences} />
          <ExperienceList title="Education" experiences={EducationExperiences} />
        </div>
      </div>
    </section>
  );
};

const ExperienceList = memo(({ experiences }) => {
  return (
    <div className="sm:py-10 py-5 sm:px-5 px-2.5">
      {experiences.map((item) => (
        <div key={item.company_name} className="work-content_container">
          <div className="flex flex-col h-full justify-start items-center py-2">
            <div className="work-content_logo">
              <img 
                className="w-full h-full" 
                src={item.icon} 
                alt={item.company_name} 
                loading="lazy" 
              />
            </div>
            <div className="work-content_bar" />
          </div>
          <div className="sm:p-5 px-2.5 py-5">
            <p className="font-bold text-white-800">{item.company_name}</p>
            <p className="text-sm mb-5">
              {item.title} -- <span>{item.date}</span>
            </p>
            <ul className="mt-5 list-disc ml-5 space-y-2">
              {item.points.map((point, i) => (
                <li key={i} className="text-white-100 text-[14px] pl-1 tracking-wider">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
});

export default memo(WorkExperience);
