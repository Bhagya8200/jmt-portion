import { useState } from "react";

function FrequentlyAskedQues() {
  const details = [
    {
      question: "Can participants from various schools form a single team?",
      answer:
        "No. Participants must be from the same school to take part in the event.",
    },
    {
      question: "How many students can be part of a team?",
      answer:
        "You can either participate individually or make a team with a maximum of 4 students.",
    },
    {
      question: "Can we make cross category teams?",
      answer:
        "No, the students from a team should all be from grades 6-8 (Junior) or 9-10 (Senior). Teams across the categories are not taken into consideration.",
    },
    {
      question:
        "Are multiple submissions allowed? Can teams work on more than one problem statement?",
      answer:
        "Multiple submissions will not be taken into account. Only the first submission will be considered. It is advised to focus on a single problem statement and submit it.",
    },
    {
      question: "How do I learn more about JMT?",
      answer:
        "We conduct a pre-JMT event called Makerverse. You can join us during that to learn more about JMT. You can also reach out to our team for more information.",
    },
  ];

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    setSelected(selected === i ? null : i);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#0d0d0d] text-[#e0e0e0] py-10 px-4 md:px-8">
      <div className="flex flex-col justify-center items-center text-center">
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold">Frequently Asked</p>
        <p className="text-3xl md:text-4xl lg:text-5xl italic mt-2">Questions</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-full max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl" style={{ height: "600px" }}>
          {details.map((item, i) => (
            <div
              key={i}
              className="item border border-[#333333] rounded-lg overflow-hidden mb-4"
            >
              <div
                className="bg-[#1a1a1a] flex justify-between items-center cursor-pointer p-4 md:p-6 border-b border-[#4d4d4d]"
                onClick={() => toggle(i)}
              >
                <h2 className="text-md md:text-lg lg:text-xl font-semibold text-[#ffffff]"> 
                  {item.question}
                </h2>
                <span className="text-2xl md:text-3xl text-[#ffffff]">
                  {selected === i ? "-" : "+"}
                </span>
              </div>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  selected === i ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-4 md:p-6 bg-[#1a1a1a] text-[#b3b3b3]">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FrequentlyAskedQues;
