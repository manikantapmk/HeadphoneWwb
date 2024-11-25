import React from "react";
import { FaMapLocation } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { SiGoogle } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import creadit_cards from "../../assets/creadit_cards.png";

const Footer = () => {
  return (
    <footer className="bg-primary pt-12 text-white">
      <div className="container py-5">
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="max-w-[300px] flex justify-start flex-col gap-6">
            <h1 className="text-3xl font-bold uppercase">Playing</h1>
            <p className="text-sm max-w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea
              ratione quidem libero, praesentium ab atque? Quidem maxime,
              numquam dolores
            </p>
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-2">
                <span>
                  <IoCall />
                </span>
                1 (123) 456-7890
              </p>
              <p className="flex items-center gap-2">
                <span>
                  <FaMapLocation />
                </span>
                Noida, Uttar Pradesh
              </p>
            </div>
          </div>
          <div className="max-w-[250px] flex flex-col gap-6">
            <h1 className="text-3xl font-bold uppercase">Quick Links</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-[300px] flex justify-start flex-col gap-6">
            <h1 className="text-3xl font-bold uppercase">Playing</h1>
            <div className="flex flex-col gap-2">
              <ul className="flex flex-row gap-2">
                <li className="text-3xl hover:scale-105 duration-300">
                  <a href="#">
                    <FaFacebook />
                  </a>
                </li>
                <li className="text-3xl hover:scale-105 duration-300">
                  <a href="#">
                    <FaInstagram />
                  </a>
                </li>
                <li className="text-3xl hover:scale-105 duration-300">
                  <a href="#">
                    <FaTelegram />
                  </a>
                </li>
                <li className="text-3xl hover:scale-105 duration-300">
                  <a href="#">
                    <SiGoogle />
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex gap-2 flex-col">
              <p>Payment Methods</p>
              <div>
                <img src={creadit_cards} alt="" />
              </div>
            </div>
          </div>
        </div>
        <p class="text-white text-center mt-8 border-t-2 pt-8">
          © 2024. All Rights Reserved || The Coding Journey
        </p>
      </div>
    </footer>
  );
};

export default Footer;
