"use client";

import { FaLocationArrow, FaGithub } from "react-icons/fa6";

import { projects } from "../../data";
import { PinContainer } from "@/components/ui/Pin";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const RecentProjects = () => {
  return (
    <div className="py-10" id="projects">
   
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((item) => (
          <div
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={item.link}
              href={item.link}
            >
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[20vh] lg:h-[20vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center space-x-4">
                <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex lg:text-xl md:text-xs text-sm text-purple hover:underline"
                  >
                    Check Live Site
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </a>
                  <Button
                    asChild
                    className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100"
                  >
                    <a href={item.githubLink} target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center">
                        <FaGithub className="mr-2 h-4 w-4" />
                        README
                      </div>
                    </a>
                  </Button>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;