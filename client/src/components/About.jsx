import React from "react";


const AboutUs = () => {
  return (
    <div
      className="text-white bg-cover bg-center"
      
    >
      {/* Hero Section */}
      <section className="backdrop-blur-sm  py-24 px-6 text-center">
        <h2 className="text-orange-400 text-sm uppercase tracking-wide">Empowering Teams</h2>
        <h1 className="text-4xl font-bold mt-2">The People Behind Teamify</h1>
        <p className="  bg-white/10 bg-opacity-70 mt-4 text-lg max-w-2xl mx-auto p-3 rounded-xl">
          At Teamify, we believe flexibility fuels productivity. Our mission is to help businesses grow by providing powerful, easy-to-use tools for managing remote and hybrid teams.
        </p>
      </section>

      {/* Values & Impact */}
      <section className="backdrop-blur-sm py-16 px-6 grid md:grid-cols-3 gap-8 text-left">
        <div className=" bg-white/10 bg-opacity-70 p-6 rounded-2xl shadow-lg">
          <h3 className="text-orange-400 text-xl font-semibold mb-2">🚀 Innovation</h3>
          <p>
            We continuously evolve our platform to bring you the best features in team communication, collaboration, and productivity.
          </p>
        </div>
        <div className=" bg-white/10 bg-opacity-70 p-6 rounded-2xl shadow-lg">
          <h3 className="text-orange-400 text-xl font-semibold mb-2">🤝 Collaboration</h3>
          <p>
            Our tools are built to foster seamless teamwork across departments, companies, and even continents.
          </p>
        </div>
        <div className=" bg-white/10 bg-opacity-70 p-6 rounded-2xl shadow-lg">
          <h3 className="text-orange-400 text-xl font-semibold mb-2">📈 Growth</h3>
          <p>
            With flexible plans and scalable features, Teamify grows with your team — from startup to enterprise.
          </p>
        </div>
      </section>

     
    </div>
  );
};

export default AboutUs;
