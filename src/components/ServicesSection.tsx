import React from 'react';
import { FadeIn } from './FadeIn';

const servicesData = [
  {
    number: '01',
    name: 'Machine Learning',
    description:
      'Developing and training predictive models, supervised/unsupervised pipelines, and evaluation using Scikit-learn and Python.',
  },
  {
    number: '02',
    name: 'Data Engineering',
    description:
      'Preprocessing complex datasets, feature engineering, and exploratory data analysis (EDA) using NumPy, Pandas, and Seaborn.',
  },
  {
    number: '03',
    name: 'Deep Learning & NLP',
    description:
      'Applying neural network architectures and natural language processing to build smart systems and textual analytics.',
  },
  {
    number: '04',
    name: 'Web Deployment',
    description:
      'Building REST APIs and deploying end-to-end ML applications on Render Cloud, Oracle Cloud (OCI), and Databricks.',
  },
  {
    number: '05',
    name: 'Database Systems',
    description:
      'Designing and querying relational and non-relational databases using SQL, SQLite, MySQL, and MongoDB.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="w-full bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 select-none"
    >
      <div className="max-w-5xl mx-auto flex flex-col">
        {/* Section Heading */}
        <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mb-16 sm:mb-20 md:mb-28">
          Expertise
        </h2>

        {/* Services List */}
        <div className="flex flex-col w-full">
          {servicesData.map((service, index) => (
            <FadeIn
              key={service.number}
              delay={index * 0.1}
              y={30}
              className="w-full"
            >
              <div className="flex items-center gap-6 sm:gap-10 md:gap-16 border-t border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12 last:border-b text-[#0C0C0C]">
                {/* Service Number on the Left */}
                <div className="font-black text-[clamp(3rem,10vw,140px)] leading-none text-[#0C0C0C] w-1/4 sm:w-1/5 min-w-[70px] sm:min-w-[120px] select-none">
                  {service.number}
                </div>

                {/* Service Name + Description on the Right */}
                <div className="flex flex-col gap-2 flex-grow">
                  <h3 className="font-medium uppercase text-[#0C0C0C] text-[clamp(1rem,2.2vw,2.1rem)] leading-snug">
                    {service.name}
                  </h3>
                  <p className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60 text-[clamp(0.85rem,1.6vw,1.25rem)]">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
