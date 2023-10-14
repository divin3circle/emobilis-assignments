import React from "react";

const About = () => {
  return (
    <div className="flex gap-4 mb-16">
      {/*text div*/}
      <div className="pl-16 text-text pt-44">
        <h1 className="text-5xl font-bold  text-text ">Hello, I'm Sylus</h1>
        <h1 className="text-4xl py-4">
          <span className=" text-accent">A Frontend Developer</span> from Kenya
        </h1>
        <button className="text-3xl border-[1px] border-text  px-4 py-2 rounded-lg cursor-pointer hover:bg-text hover:text-black ease-in duration-300 ">
          Hire Me
        </button>
      </div>
      {/*image div*/}
      <div className="w-[30%] pt-16">
        <img
          src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1899&q=80"
          alt="profile"
          className="rounded-full w-[100%] h-[100%]"
        />
      </div>
    </div>
  );
};

export default About;
