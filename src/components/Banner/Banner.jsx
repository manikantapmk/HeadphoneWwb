import React from "react";
import headphone4 from "../../assets/headphone4.png";
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";
import { fadeUp } from "../Services/Services";

const Banner = () => {
  return (
    <section>
      <div className="container py-14 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12">
        {/* Banner Image */}
        <div className="flex justify-center">
          <motion.img
            initial={{ opacity: 0, x: -100, rotate: -180 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            src={headphone4}
            alt=""
            className="w-[300px]"
          />
        </div>
        {/* Banner Text */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <motion.h1
              variants={fadeUp(0.3)}
              initial="hidden"
              whileInView="show"
              className="text-3xl lg:text-4xl font-semibold font-poppins"
            >
              The Latest Headphones with The Latest Technology
            </motion.h1>
            <motion.p
              variants={fadeUp(0.4)}
              initial="hidden"
              whileInView="show"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </motion.p>
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 9999,
                followSpeed: 0.5,
                mixBlendMode: "difference",
                scale: 5,
              }}
            >
              <motion.button
                variants={fadeUp(0.5)}
                initial="hidden"
                whileInView="show"
                className="border-2 py-2 px-6 border-[#e33343] text-[#e33343] rounded-md hover:bg-[#e33343] hover:text-white"
              >
                Shop Now
              </motion.button>
            </UpdateFollower>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
