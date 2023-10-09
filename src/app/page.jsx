"use client";
import Image from "next/image";
import Team from "./teamphotos";
import Community from "./joincommunity";
import React, { useState, useEffect } from "react";
import Screencards from './screenShots'


import { useInView } from "react-intersection-observer";

export default function Home() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const { ref: imageRef, inView: imageView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (imageView == true) {
      setIsIntersecting(true);
    }
  }, [imageView]);

  const teamphotos = [
    {
      title: "Ayush Ghai",
      role: "Founder & CEO",
      imageUrl:
        "https://res.cloudinary.com/dfuwiecz0/image/upload/v1696838236/Team%20photos/ayush_figios.jpg",
    },
    {
      title: "Vincenzo",
      role: "Sales & Business Development",
      imageUrl:
        "https://res.cloudinary.com/dfuwiecz0/image/upload/v1696838236/Team%20photos/vincenzo_aug1my.jpg",
    },
    {
      title: "Jaydatta Nikalje",
      role: "Marketing & Sales",
      imageUrl:
        "https://res.cloudinary.com/dfuwiecz0/image/upload/v1696838235/Team%20photos/jay_n5fj2g.jpg",
    },
    {
      title: "Ashutosh Tripathi",
      role: "Senior Engineer",
      imageUrl:
        "https://res.cloudinary.com/dfuwiecz0/image/upload/v1696836429/Team%20photos/ashutosh_kpcrgd.jpg",
    },

    {
      title: "Avtar Singh",
      role: "Devops Engineer",
      imageUrl:
        "https://res.cloudinary.com/dfuwiecz0/image/upload/v1696837194/Team%20photos/avtar_dvamjb.jpg",
    },
    {
      title: "Gurjot Singh",
      role: "Senior Engineer",
      imageUrl:
        "https://res.cloudinary.com/dfuwiecz0/image/upload/v1696838238/Team%20photos/gurjot_x82ub2.jpg",
    },

    {
      title: "Siddharth Jain",
      role: "Senior Engineer",
      imageUrl:
        "https://res.cloudinary.com/dfuwiecz0/image/upload/v1696838237/Team%20photos/siddharth_iedptn.jpg",
    },
    {
      title: "Surya Rajput",
      role: "Senior Engineer",
      imageUrl: "https://res.cloudinary.com/dfuwiecz0/image/upload/v1696841247/Team%20photos/surya_rfphnm.jpg",
    },
    {
      title: "Pankaj Maurya",
      role: "Consultant",
      imageUrl: "https://res.cloudinary.com/dfuwiecz0/image/upload/v1696853449/Team%20photos/pankaj_cnupsr.jpg",
    },
    {
      title: "Kushal Chauhan",
      role: "Engineering Manager",
      imageUrl:
        "https://res.cloudinary.com/dfuwiecz0/image/upload/v1696851011/Team%20photos/kushal1_ur5nmc.jpg",
    },
    {
      title: "Mohit Sharma",
      role: "Marketing & Community Outreach",
      imageUrl:
        "https://res.cloudinary.com/dfuwiecz0/image/upload/v1696838236/Team%20photos/mohit_hpmsv2.jpg",
    },
    {
      title: "Mukul Samanth",
      role: "Business Development",
      imageUrl:
        "https://res.cloudinary.com/dfuwiecz0/image/upload/v1696841893/Team%20photos/mukul_xuegbp.jpg",
    },
    {
      title: "Akansha Sharma",
      role: "Business Development",
      imageUrl:
        "https://res.cloudinary.com/dfuwiecz0/image/upload/v1696849986/Team%20photos/akansha_pwqtap.jpg",
    },
    {
      title: "Shirisha Nelapogula",
      role: "Staff Engineer",
      imageUrl:
        "https://res.cloudinary.com/dfuwiecz0/image/upload/v1696839225/Team%20photos/shirisha1_cexqua.jpg",
    },
    {
      title: "Yashwant",
      role: "Staff Engineer",
      imageUrl:
        "https://res.cloudinary.com/dfuwiecz0/image/upload/v1696839140/Team%20photos/yeshwanth_sexmvx.jpg",
    }, {
      title: "Sundar Sukumar",
      role: "Staff Engineer",
      imageUrl:
        "https://res.cloudinary.com/dfuwiecz0/image/upload/v1696841144/Team%20photos/pavan_tta9fq.jpg",
    },
    {
      title: "Pavan Kumar",
      role: "Staff Engineer",
      imageUrl:
        "https://res.cloudinary.com/dfuwiecz0/image/upload/v1696839686/Team%20photos/pavan1_la418n.jpg",
    },
    {
      title: "Rohit Koktare",
      role: "Staff Engineer",
      imageUrl:
        "https://res.cloudinary.com/dfuwiecz0/image/upload/v1696850870/Team%20photos/rohit2_yshslj.png",
    },
    {
      title: "Gnaneshwar Konda",
      role: "Staff Engineer",
      imageUrl:
        "https://res.cloudinary.com/dfuwiecz0/image/upload/v1696842401/Team%20photos/gnani_yj7njv.jpg",
    },
    {
      title: "Sri Hari",
      role: "Staff Engineer",
      imageUrl:
        "https://res.cloudinary.com/dfuwiecz0/image/upload/v1696852929/Team%20photos/hari_new_rusvho.png",
    },

    {
      title: "Ritu Rani",
      role: "HR, Finance",
      imageUrl:
        "https://res.cloudinary.com/dfuwiecz0/image/upload/v1696838237/Team%20photos/ritu_rani_n0al6o.jpg",
    },
    {
      title: "Sourab kapoor",
      role: "Video Editing, Graphics design",
      imageUrl:
        "https://res.cloudinary.com/dfuwiecz0/image/upload/v1696853155/Team%20photos/sourab_new_mbznud.png",
    },
    {
      title: "Mahi Dhiman",
      role: "Graphic designer",
      imageUrl:
        "https://res.cloudinary.com/dfuwiecz0/image/upload/v1696838237/Team%20photos/mahi_kb7run.jpg",
    },

  ];

  const screenShotCards = [
    {
      title: "Vision",
      desc: "To democratise technological developments, innovations and purpose by building an equitable ecosystem for developers to collectively learn, build and scale tech products",
      classes: "card-gradient-tl",
    },
    {
      title: "Mission",
      desc: "To foster a paradigm shift in technological development by building a global community of entrepreneurs, developers and innovators, empowering the technology ecosystem through equitable access to information, resources, and technology",
      classes: "card-gradient-tr lg:self-start",
    },
    {
      title: "Life Maker Foundation",
      desc: "Godspeed is part of Lifemaker foundation. Lifemaker foundation is a happy, just and an equitable society. It aims to build and Undivided human society for wellbeing of all by Self realization, happiness, prosperity and relationships for everyone.",
      classes: "card-gradient-bl lg:self-end",
    },
    {
      title: "Azad Tech Collective",
      desc: "            Godspeed is associated with Azad Tech Collective. Azad (Free) is a collective that emphasises on the right use of technology for the purpose of upliftment of society through technology. It is an international collective of startups, entrepreneurs, enterprises that come together to empower themselves through learning, co-creating and earning together while making a meaningful, purpose driven change in the society",
      classes: "card-gradient-br",
    }
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-950 text-white pb-10">
      <div className="mt-20 p-4 w-full lg:w-[70%] flex flex-col justify-center items-start gap-8 ">
        <div className="flex flex-col lg:flex-row justify-center items-start gap-8">
          <div>
            <p className="text-md text-blue-500 font-mono">About Us</p>
            <h1 className="text-6xl text-gray-300 font-mono">Godspeed</h1>
          </div>
          <div className="lg:w-[60%]">
            <p className="lg:tracking-wide font-mono text-lg lg:text-lg text-gray-400">
              Godspeed is the world’s first Meta-framework! A framework of a
              frameworks that helps you build, deploy and monitor your softwares
              faster and more efficiently! How does it do that? Developers use
              Godspeed to standardise their software development workflow with
              minimal efforts, Godspeed takes care of your standard guard-rails
              giving the developers a freedom to focus on most important tasks.
              <br />
              Godspeed is industry agnostic! No matter which industry you build
              a solution for, Godspeed is your constant partner. Use
              standardised integrations to quickly plug-and-play with your
              favourite tools on your existing or new projects.
            </p>
          </div>
        </div>

        {/* <div className="w-full lg:w-[70%] self-end flex flex-col">
          <img
            className="w-full"
            src="https://res.cloudinary.com/dfuwiecz0/image/upload/v1695970273/Godspeed/assortment-fresh-fruits-vegetables-isolated-white_392895-24654_jpd9e4.avif"
            alt="team photo"
          />
          <h1 className="text-xl self-center mt-2 text-gray-400">
            On a Low Code Mission
          </h1>
        </div> */}
      </div>

      {/* screenshot cards */}
      <div className="w-full p-2 lg:w-[50%] mt-20 flex flex-col justify-center items-center">
        <h1 className="text-4xl text-blue-200">What We Believe</h1>
        <p className="text-md lg:text-xl text-gray-400 text-center">
          Principles that dictate how we think, behave, and make decisions
        </p>
        {
          screenShotCards.map(card => <Screencards cardDetails={card} />)
        }
      </div>
      {/* all team members photos */}
      <div ref={imageRef}

        className="w-full lg:w-[70%] flex flex-wrap gap-10 justify-center items-center lg:p-8 mt-10"
      >
        {teamphotos.map((person) => (
          <Team person={person} display={isIntersecting} />
        ))}
      </div>

      {/* join community */}

      <div className="w-full lg:w-[70%] mt-10">
        <Community />
      </div>

      {/* office address */}

      <div className="flex flex-col gap-4 lg:flex-row mt-10 lg:mt-20 w-full lg:w-[70%] justify-between p-8 border-b-2 border-gray-700">
        <div className="w-full lg:w-[40%]">
          <p className="italic font-semibold text-gray-400 text-xl pb-2">
            Our engineering centre:
          </p>
          <p className=" text-lg text-gray-700">
            We have a dedicated engineering centre built to co-create with
            entrepreneurs, technology developers, business leaders and
            visionaries. Godspeed’s engineering centre is located in Saalig,
            <b className="text-gray-200"> Dharamshala </b> in the hills of <b className=" ">Himachal Pradesh</b>. The space is designed
            for innovation through collaboration
          </p>
        </div>
        <div className="w-full lg:w-[40%]">
          <p className="italic font-semibold text-gray-400 text-xl pb-2">
            Head Quarters:
          </p>
          <p className=" text-lg text-gray-700">
            Godspeed Pvt. Ltd. UEN NO.: 202236386Z, Registered office at 160
            ROBINSON ROAD, #23-08 SINGAPORE 068914 Singapore
          </p>
        </div>
      </div>
    </div>
  );
}
