"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { FaHouse, FaArrowTrendUp, FaStar } from "react-icons/fa6";



const NavBar = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <FaHouse className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Trending",
      link: "/?genre=fetchTrending",
      icon: <FaArrowTrendUp className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Top Rated",
      link: "/?genre=fetchTopRated",
      icon: (
        <FaStar className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
      <div className="relative  w-full">
        <FloatingNav navItems={navItems} />
      </div>
    );
}

export default NavBar