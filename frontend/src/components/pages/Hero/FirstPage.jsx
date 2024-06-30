import React from "react";
import personImg from "../../../assets/person3.png";

const FirstPage = () => {
  return (
    <div className="h-full">
      <main className="h-full w-full bg-secondary page-shadow">
        <div className="p-10  space-y-4">
          {/* image-container */}
          <div>
            <img src={personImg} alt="" className="w-[270px] h-[350px] mx-auto" />
          </div>
          {/* text-container */}
          <div>
            <div className="space-y-3">
              <p className="uppercase">Hello</p>
              <p className="text-3xl md:text-6xl font-bold text-black/80">
                I'm  Pratyush 
              </p>
              <p className="text-black/78 text-left">Full Stack Developer</p>
              <p className="text-black/77">
              Combining creativity and technical expertise, I transform visions into reality through code.
              </p>
              <a
                className="inline-block primary-btn "
                href="mailto:Tq6cM@example.com"
              >
                {" "}
                Hire me
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FirstPage;
