import React from "react";

//import socials data
import { social } from "../data";
const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-primary text-white min-h-[732px] section"
    >
      <div className=" container mx-auto text-center">
        <h2 className="text-5xl font-primary font-extrabold mb-4">
          Contact Us
        </h2>
        <p className="max-w-[540px] mx-auto px-6 lg:px-0 mb-[64px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
          bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis
          tincidunt laoreet.
        </p>
        {/* form */}
        <form className="px-8 lg:px-0 max-w-[600px] mx-auto flex flex-col space-y-6 mb-[46px]">
          <input className="form-control" type="text" placeholder="Full name" />
          <input
            className="form-control"
            type="email"
            placeholder="Email address"
          />
          <textarea className="textarea" placeholder="Message"></textarea>
          <button className="btn bg-accent hover:bg-accent-hover transition-all">
            Send Message
          </button>
        </form>
        {/* socials */}
        <div className="flex items-center justify-between max-w-[250px] mx-auto">
          {social.map((item, index) => {
            return (
              <a href="#!" key={index}>
                <img src={item.icon} alt="" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
