import React from "react";
import { services } from "../assets/services";
import Card from "./utilis/Card";

import { RiCustomerServiceFill } from "react-icons/ri";
const Services = () => {
  return (
    <div className="my-12">
      <div className="mb-8 text-text flex justify-center gap-2">
        <RiCustomerServiceFill size={45} />
        <h1 className="text-4xl">Services</h1>
      </div>
      {/*cards*/}
      <div className="grid grid-cols-3 p-2">
        {services.map((service) => {
          return <Card key={service.title} service={service} />;
        })}
      </div>
    </div>
  );
};

export default Services;
