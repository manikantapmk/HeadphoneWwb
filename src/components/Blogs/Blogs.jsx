import React from "react";
import blog1 from "../../assets/blogs/blog1.jpg";
import blog2 from "../../assets/blogs/blog2.jpg";
import blog3 from "../../assets/blogs/blog3.jpg";
import blog4 from "../../assets/blogs/blog4.jpg";
import { UpdateFollower } from "react-mouse-follower";
import { fadeUp } from "../Services/Services";
import { motion } from "framer-motion";


const BlogData = [
  {
    id: 1,
    title: "10 Tips for a Productive Morning Routine",
    desc: "Discover how to start your day with energy and focus. Learn the best habits for a productive morning.",
    link: "https://www.example.com/productive-morning-routine",
    img: blog1,
    delay: 0.6
  },
  {
    id: 2,
    title: "The Best Hiking Trails in the U.S.",
    desc: "Explore the top hiking destinations across the United States. From easy walks to challenging climbs.",
    link: "https://www.example.com/best-hiking-trails",
    img: blog2,
    delay: 0.7
  },
  {
    id: 3,
    title: "How to Build a Minimalist Wardrobe",
    desc: "A step-by-step guide to creating a timeless, versatile wardrobe with a focus on quality over quantity.",
    link: "https://www.example.com/minimalist-wardrobe",
    img: blog3,
    delay: 0.8
  },
  {
    id: 4,
    title: "5 Quick and Easy Recipes for Busy Weeknights",
    desc: "Looking for delicious meals that come together in 30 minutes or less? Try these quick and easy recipes.",
    link: "https://www.example.com/quick-easy-recipes",
    img: blog4,
    delay: 0.9
  },
];

const Blogs = () => {
  return (
    <section className="bg-gray-50">
      <div className="container py-14">
        <h1 className="text-3xl text-center font-bold font-poppins pb-8">
          Blogs
        </h1>
        <div className="flex flex-col justify-center items-center md:flex-row gap-5">
          {BlogData.map((blog) => {
            return (
              <UpdateFollower
              mouseOptions={{
                backgroundColor: "black",
                zIndex: 999,
                followSpeed: 1.5,
                text: "read",
                textFontSize: "3px",
                scale: 4
              }}
              >
                <motion.div
                 variants={fadeUp(blog.delay)}
                 initial="hidden"
                 whileInView="show"
                className="max-w-[300px] p-5 bg-white shadow-lg rounded-md flex flex-col items-center justify-start hover:-translate-y-2 duration-300">
                  <img src={blog.img} alt="" />
                  <div className="pt-5 flex flex-col gap-2">
                    <h1 className="font-bold text-xl line-clamp-1">
                      {blog.title}
                    </h1>
                    <p className="line-clamp-2">{blog.desc}</p>
                  </div>
                </motion.div>
              </UpdateFollower>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
