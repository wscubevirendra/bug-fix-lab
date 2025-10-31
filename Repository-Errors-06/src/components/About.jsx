import React from "react";

const About = () => {
  return (
    <div className="text-center mt-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-indigo-700 mb-3">About TVMaze Explorer</h1>
      <p className="text-gray-700 leading-relaxed">
        TVMaze Explorer is a React + Tailwind project that fetches data from the
        public TVMaze API. It displays trending TV shows with name, genre,
        ratings, and official website links — all neatly designed for a clean user experience.
      </p>
    </div>
  );
};

export default About;

