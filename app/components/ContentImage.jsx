import SectionContainer from "./SectionContainer";
import { v4 as uuid } from "uuid";

const ContentImageData = [
  {
    id: "1",
    title: "Sip your orange juice while we do the heavy lifting 🥤",
    content:
      "Imagine if the product research, building, and scaling could be handled by someone while you sit back and relax? Feels good? We actually do that!",
    align: "left",
    video: "",
    poster:
      "https://osdblyvwidixouibqkrf.supabase.co/storage/v1/object/public/Badminton/Untitled%20design%20-%202024-08-09T141430.924.png",
    bgColor: "#f9f9f9",
  },
  {
    id: "2",
    title: "We’re not expecting, but we always deliver on time 📦",
    content:
      "How would you feel if you launch your product faster than expected? We build at lightning speed, so you can start reaping the rewards sooner.",
    align: "right",
    video: "",
    poster:
      "https://osdblyvwidixouibqkrf.supabase.co/storage/v1/object/public/Badminton/Untitled%20design%20-%202024-08-09T141441.981.png",
    bgColor: "#ffffff",
  },
  {
    id: "3",
    title:
      "Development for us isn't just code, its your overall product growth 📈",
    content:
      "We’re your all-in-one partner. Beyond coding, we bring content, graphics, and strategic insights to elevate your product to the next level.",
    align: "left",
    video: "",
    poster:
      "https://osdblyvwidixouibqkrf.supabase.co/storage/v1/object/public/Badminton/Untitled%20design%20-%202024-08-09T141453.575.png",
    bgColor: "#f9f9f9",
  },
];

const ContentImage = () => {
  return (
    <SectionContainer className="process-items mt-16 space-y-16">
      {ContentImageData.map((item) => (
        <div
          id={item.id}
          key={item.id}
          className="process-item--container grid md:grid-cols-2 gap-y-8"
        >
          <div
            className={`process-item--image rounded-3xl ${
              item.align === "left" ? "md:order-1" : ""
            }`}
          >
            <div
              className="order-2 lg:order-1 flex overflow-hidden flex-1 justify-center rounded-xl shadow-xl ring-1 ring-gray-400/10 items-center h-[24rem] lg:h-auto"
              style={{ backgroundColor: item.bgColor }}
            >
              <video
                src={item.video}
                autoPlay
                loop
                muted
                preload="auto"
                poster={item.poster}
                className="w-full h-full"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div
            className={`process-item--content ${
              item.align === "left"
                ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                : "md:pl-16 lg:pl-24 xl:pl-32 mr-auto"
            } my-auto content text-black/60`}
          >
            <h3 className="mb-6 h4 md:h3 font-semibold text-black">
              {item.title}
            </h3>
            <p className="">{item.content}</p>
            <ul className="process-item--list space-y-3">
              {item.listItems?.length &&
                item.listItems.map((listItem) => (
                  <li
                    id={listItem.id}
                    key={listItem.id}
                    className="inline-grid grid-flow-col-dense"
                  >
                    {listItem.content}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      ))}
    </SectionContainer>
  );
};

export default ContentImage;
