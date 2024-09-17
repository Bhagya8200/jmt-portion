import React from "react";
import { motion } from "framer-motion";

import aboutImage1 from "../assets/about-image1.jpg";
import aboutImage2 from "../assets/about-image2.jpg";
import aboutImage3 from "../assets/about-image3.jpg";

const data = [
  {
    question: "Who We Are?",
    answer:
      "We are part of team Shaastra, dedicated to bringing forth the creativity and maker-culture among school students. Our vision is to foster innovation and creativity among young minds. We aim at providing a platform where budding innovators can explore their potential, collaborate with peers, and bring their ideas to life.",
    image: aboutImage1,
    imagePosition: "left",
  },
  {
    question: "What We Do?",
    answer:
      "At the Junior Make-A-Thon, our mission is to inspire and empower young minds to transform their imaginative ideas into tangible, impactful innovations. We offer a unique opportunity for students to engage in hands-on activities, enabling them to design and build hardware prototypes. Through this process, participants not only enhance their technical skills but also develop critical thinking, problem-solving abilities, and teamwork.",
    image: aboutImage2,
    imagePosition: "right",
  },
  {
    question: "How Do We Do It?",
    answer:
      "The journey begins with connecting with mentors to develop their ideas. Over time, they refine and build their prototypes, guided by experts in the field. Ultimately, participants present their projects to judges, showcasing their creativity and innovation.",
    image: aboutImage3,
    imagePosition: "left",
  },
];

function Section({
  question,
  answer,
  image,
  imagePosition,
}: {
  question: string;
  answer: string;
  image: string;
  imagePosition: string;
}) {
  return (
    <motion.div
      className={`relative bg-black text-white flex flex-col md:flex-row items-center radial-gradient h-[600px] md:h-[350px] lg:h-[400px] xl:h-[500px] w-[100%] overflow-visible mt-44 ${
        imagePosition === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="relative flex flex-1">
        {image && (
          <div
            className={`relative ${
              imagePosition === "left"
                ? "lg:left-10 md:left-10 sm:left-28 left-9"
                : "lg:-right-20 md:-right-20 sm:-right-28 -right-9 "
            } lg:-top-20 md:-top-20 w-full sm:w-[80%] md:w-[80%]`}
            style={{ zIndex: 10 }}
          >
            <img
              src={image}
              alt="About Section"
              className="md:w-full md:h-full object-cover h-[100%] w-[80%]"
              loading="lazy"
            />
          </div>
        )}
      </div>
      <div className="flex flex-1 md:ms-8 flex-col justify-center w-full">
        <div
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-thin p-5"
          style={{ fontFamily: "Merriweather, serif" }}
        >
          {question}
        </div>

        <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl p-5">
          {answer}
        </div>
      </div>
      <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
    </motion.div>
  );
}

function VerticalSections() {
  return (
    <div className="flex flex-col items-center w-full">
      {data.map((item, index) => (
        <Section
          key={index}
          question={item.question}
          answer={item.answer}
          image={item.image}
          imagePosition={item.imagePosition}
        />
      ))}
    </div>
  );
}

export default VerticalSections;
