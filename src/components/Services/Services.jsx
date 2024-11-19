import React from "react";
import image_1 from "../../assets/icons/image_1.png";
import image_2 from "../../assets/icons/image_2.png";
import image_3 from "../../assets/icons/image_3.png";
import image_4 from "../../assets/icons/image_4.png";
import { UpdateFollower } from "react-mouse-follower";

const ServicesData = [
  {
    id: 1,
    title: "Security",
    icon: image_1,
    link: "#",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.",
    delay: 0.5,
  },
  {
    id: 2,
    title: "Gurantee",
    icon: image_2,
    link: "#",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.",
    delay: 0.5,
  },
  {
    id: 3,
    title: "Affordability",
    icon: image_3,
    link: "#",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.",
    delay: 0.5,
  },
];
const Services = () => {
  return (
    <>
      <section className="bg-gray-100 font-poppins py-8">
        <div className="container py-14">
          <h1 className="text-3xl font-bold text-center pb-10">Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ServicesData.map((eachService) => (
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 9999,
                followSpeed: 0.5,
                rotate: 720,
                // mixBlendMode: "difference",
                scale: 6,
                backgroundElement: (
                  <div>
                    <img src={eachService.icon} alt="" />
                  </div>
                ),
              }}
            >
              <div className="flex flex-col max-w-[300px] items-center justify-center shadow-lg p-5 rounded-lg bg-white">
                <img src={eachService.icon} alt="" className="w-[100px] mb-4" />
                <div className="text-center space-y-2">
                  <h1 className="text-2xl font-bold">{eachService.title}</h1>
                  <p className="text-center text-sm text-black">
                    {eachService.desc}
                  </p>
                </div>
              </div>
            </UpdateFollower>
          ))}
        </div>
        </div>
      </section>
    </>
  );
};

export default Services;
