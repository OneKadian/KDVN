"use client";
import SectionContainer from "./SectionContainer";
import { Icon } from "@iconify/react";
import { useState } from "react";
import clsx from "clsx";
import { v4 as uuid } from "uuid";

const accordionData = [
  {
    id: uuid(),
    title: "How long will it take to build my product?",
    isOpen: false,
    content:
      "We prioritize speed without sacrificing quality. Expect a swift delivery to get your product live and thriving.",
  },
  {
    id: uuid(),
    title: "What if I don’t know exactly what I want?",
    isOpen: false,
    content:
      "No worries! We assist you in defining your vision, offering expert guidance to shape your idea into a concrete plan for development.",
  },
  {
    id: uuid(),
    title: "Do you handle more than just coding?",
    isOpen: false,
    content:
      "Absolutely! We provide a full suite of services including content creation, graphic design, and strategic planning to ensure your product stands out.",
  },
  {
    id: uuid(),
    title: "How does your pricing compare to agencies?",
    isOpen: false,
    content:
      "Our pricing is designed to be more accessible than traditional agencies, offering you high value without the hefty price tag. We deliver exceptional results at a competitive rate.",
  },
  {
    id: uuid(),
    title: "What happens if I need changes after the project is complete?",
    isOpen: false,
    content:
      "We offer support even after launch. If you need adjustments or additional features, we’re here to help and ensure your product continues to meet your needs.",
  },
];

const accordionItemType = {
  top: "rounded-t-lg",
  default: "border rounded-none border-t-0",
  bottom: "border border-t-0 rounded-b-lg",
};

const Accordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const accordionClickHandle = (id) => {
    setActiveAccordion(id === activeAccordion ? null : id);
  };

  return (
    <SectionContainer className="accordion--container my-16 drop-shadow-xl max-w-3xl mx-auto offset-y-0 offset-x-8">
      {accordionData.map((accordionItem, index) => (
        <div
          key={accordionItem.id}
          id={accordionItem.id}
          className={clsx(
            // "accordion-item--container border border-neutral-200 bg-white overflow-hidden",
            "accordion-item--container border border-neutral-200 bg-white ",

            {
              [accordionItemType.top]: index === 0,
              [accordionItemType.default]:
                index > 0 && index < accordionData.length - 1,
              [accordionItemType.bottom]: index === accordionData.length - 1,
            }
          )}
        >
          <h2 className="accordion-item--heading mb-0">
            <button
              // className="group relative flex w-full font-semibold items-center rounded-t-lg border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition"
              className="flex w-full font-semibold items-center rounded-t-lg border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition"
              type="button"
              aria-expanded={accordionItem.isOpen}
              onClick={() => accordionClickHandle(accordionItem.id)}
            >
              {accordionItem.title}
              <Icon
                icon="material-symbols:keyboard-arrow-up-rounded"
                className="ml-auto h-8 w-8 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out motion-reduce:transition-none text-gray-400"
              />
            </button>
          </h2>
          <div
            className={clsx("accordion-item--content py-4 px-5 text-base", {
              hidden: activeAccordion !== accordionItem.id, // Use hidden class to animate height to 0
              "!visibility block": activeAccordion === accordionItem.id, // Use block class to show content again
            })}
          >
            <p className="font-medium text-black">{accordionItem.content}</p>
          </div>
        </div>
      ))}
    </SectionContainer>
  );
};

export default Accordion;
