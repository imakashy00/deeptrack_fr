import React from "react";

const Services = () => {
  const services = [
    {
      name: "Uploaded Media",
    },
    {
      name: "Real Time Media",
    },
    {
      name: "Social Media",
    },
    {
      name: "E-Commerce",
    },
  ];
  return (
    <div className="w-full sm:space-y-10 space-y-5">
      <div className="sm:col-span-4 justify-center flex">
        <h1 className="sm:text-5xl text-gray-800 text-3xl">
          We verify content of-
        </h1>
      </div>
      <ul className="grid sm:grid-cols-4 w-full ">
        {services.map((service) => {
          return (
            <li key={service.name} className="sm:text-xl text-gray-600 text-sm m-auto sm:py-auto py-5">
              {service.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Services;
