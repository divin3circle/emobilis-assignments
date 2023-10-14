import React from "react";

const Card = ({ service }) => {
  return (
    <div className="px-2 rounded-lg">
      <a
        href="#"
        className="h-[450px] group relative block bg-black rounded-lg hover:scale-105 duration-300"
      >
        <img
          alt="Developer"
          src={service.imageUrl}
          className="absolute rounded-lg inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div className="relative p-4 sm:p-6 lg:p-8">
          <p className="text-lg font-semibold uppercase tracking-widest text-text">
            {service.price}
          </p>

          <p className="text-xl font-bold text-white sm:text-2xl">
            {service.title}
          </p>

          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">{service.description}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
