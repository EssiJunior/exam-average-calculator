// REACT IMPORTS
import { useNavigate } from "react-router-dom";

// COMPONENTS AND UTILITIES
import Button from "../components/Button";

// ASSETS
import { template } from "../assets";

import "../styles/template.css";
import { useState } from "react";
import { templateCards } from "../utils/data";
import Breadcrumb from "../components/Breadcrumb";

// Card data

function Template() {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <main className="template md:h-dvh w-full grid md:grid-rows-1 grid-cols-1 md:grid-cols-[1.5fr_2fr] bg-white text-black max-md:font-black relative overflow-hidden">
      {/* Texts */}
      <div className="overflow-auto flex justify-start items-center max-md:h-dvh mobile-template max-md:p-5">
        <div className="blur-card p-5 flex flex-col justify-center items-start gap-10 max-md:backdrop-blur-md max-md:bg-white/40 max-md:w-full rounded">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Template', href: '/template' }
          ]} />
          <p>
            Allright, let's do this! <span className="motion-emoji">🤓</span>
          </p>
          <p className="">
            Choose a{" "}
            <span className="font-black md:text-[45px] sm:text-[35px] text-[25px] gradient__text">
              Template
            </span>
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {templateCards.map((card) => (
              <div
                key={card.id}
                className={`cursor-pointer relative group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden ${
                  hoveredCard === card.id ? `ring-2 ${card.ringColor}` : ""
                }`}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => navigate(`/calculation/${card.id}`)}
              >
                {/* Background gradient effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                {/* Card content */}
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-xl mb-4 flex items-center justify-center text-white bg-gradient-to-br ${card.color} shadow-md p-3`}
                  >
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="w-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {card.title}
                  </h3>
                </div>

                {/* Hover effect elements */}
                <div
                  className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full ${card.bubbleColor} opacity-0 group-hover:opacity-20 transition-all duration-500 transform translate-y-8 translate-x-8 group-hover:translate-y-0 group-hover:translate-x-0`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Illustration */}
      <div className="hidden md:flex justify-center items-center bg-secondary/20">
        <img
          src={template}
          alt="template"
          loading="lazy"
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
    </main>
  );
}

export default Template;
