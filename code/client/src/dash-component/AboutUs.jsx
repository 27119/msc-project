/* eslint-disable react/no-unescaped-entities */
const AboutUs = () => {
  return (
    <div>
      <div className="lg:h-1/3 h-full gap-4 flex flex-col-reverse lg:flex-row w-full py-2">
        <div className="h-full bg-gray-100 rounded-lg w-full lg:w-2/3 p-4">
          <h1 className="text-3xl pb-8 font-bold">SOLAR ENERGY</h1>
          <p>
            Solar energy is a clean and renewable energy source that harnesses
            the power of the sun to generate electricity and heat. It is a
            sustainable alternative to fossil fuels, helping to reduce
            greenhouse gas emissions and combat climate change. Solar energy
            systems, such as photovoltaic panels, convert sunlight directly into
            electricity, which can power homes, businesses, and even entire
            communities. <br /> <br />
            As technology advances, the efficiency and affordability of solar
            energy continue to improve, making it an increasingly viable option
            for both individual and large-scale energy needs. With the potential
            to provide a significant portion of the world's energy, solar power
            is a key player in the transition to a more sustainable and
            environmentally friendly energy future.
          </p>
        </div>
        <div className="h-full min-h-80 bg-gray-400 rounded-lg overflow-hidden w-full lg:w-1/3">
          <img
            className="h-80 w-full"
            src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>

      <div className="lg:h-1/3 h-full gap-4 flex flex-col-reverse lg:flex-row-reverse  w-full py-2">
        <div className="h-full bg-gray-100 rounded-lg w-full lg:w-2/3 p-4">
          <h1 className="text-3xl pb-8 font-bold">SOLAR ENERGY</h1>
          <p>
            Wind energy is a powerful and renewable energy source that converts
            the kinetic energy of wind into electricity through wind turbines.
            As the wind turns the blades of a turbine, the mechanical energy is
            transformed into electrical energy, which can be used to power
            homes, industries, and entire regions. <br />
            <br /> Wind energy is one of the fastest-growing energy sources in
            the world, offering a clean alternative to fossil fuels and helping
            to reduce carbon emissions. It is especially effective in areas with
            strong, consistent winds, such as coastal regions and open plains.
            With advancements in technology, wind turbines are becoming more
            efficient and cost-effective, making wind energy a crucial component
            in the global shift toward sustainable energy solutions.
          </p>
        </div>
        <div className="h-full min-h-80 bg-gray-400 rounded-lg overflow-hidden w-full lg:w-1/3">
          <img
            className="h-80 w-full"
            src="https://images.unsplash.com/photo-1515344905723-babc01aac23d?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>

      <div className="lg:h-1/3 h-full gap-4 flex flex-col-reverse lg:flex-row w-full py-2">
        <div className="h-full bg-gray-100 rounded-lg w-full lg:w-2/3 p-4">
        <h1 className="text-3xl pb-8 font-bold">HYDROELECTRIC ENERGY</h1>
          <p>
            Hydropower, also known as hydroelectric energy, is a sustainable
            energy source that harnesses the power of flowing water to generate
            electricity. By using dams or diversion structures, water is
            channeled through turbines, converting the kinetic energy of moving
            water into mechanical energy, and then into electricity. Hydropower
            is one of the oldest and most reliable forms of renewable energy,
            providing a significant portion of the world's electricity with
            minimal greenhouse gas emissions. It offers a consistent and
            controllable energy supply, making it a vital component of the
            renewable energy mix. Additionally, hydropower projects often
            contribute to water management, flood control, and irrigation,
            further enhancing their environmental and economic benefits. As the
            world seeks to transition to more sustainable energy systems,
            hydropower remains a key player due to its efficiency, reliability,
            and ability to support large-scale energy needs.
          </p>
        </div>
        <div className="h-full min-h-80 bg-gray-400 rounded-lg overflow-hidden w-full lg:w-1/3">
          <img className="h-80 w-full" src="https://images.unsplash.com/photo-1499883614574-22631ce07525?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
