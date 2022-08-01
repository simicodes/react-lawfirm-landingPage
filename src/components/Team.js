import React from "react";

//import team data
import { team } from "../data";

const Team = () => {
  return (
    <section id="team" className="section">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-primary font-extrabold mb-4">
          Our Attourneys
        </h2>
        <p className="max-w-[540px] mx-auto px-6 lg:px-0 mb-[60px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
          bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis
          tincidunt laoreet
        </p>
        {/* team members grid */}
      </div>
    </section>
  );
};

export default Team;
