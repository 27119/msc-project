import { useState } from "react";
import AboutUs from "../dash-component/AboutUs";
import Research from "../dash-component/Research";
import Impact from "../dash-component/Impact";
import Forum from "../dash-component/Forum";
import { BiBell, BiMenu } from "react-icons/bi";
import { useData } from "../context/data";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [activeButton, setActiveButton] = useState("aboutUs");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const {data, setData } = useData();
  const navigate = useNavigate();

  const handleClick = (button) => {
    setActiveButton(button);
    setDrawerOpen(false); 
  };

  const handleLogout = () => {
    setData({
      user: null,
      token: "",
    });
    localStorage.removeItem("loginedUser");
    navigate("/");
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="flex">
      
      <div
        className={`${
          drawerOpen ? "flex" : "hidden"
        } lg:flex flex-col absolute lg:sticky top-0 left-0 lg:w-1/5 min-w-64 w-full h-screen border-2 p-4 z-50`}
      >
        <div className="flex justify-between items-center pb-12">
          <h1 className="text-center text-3xl">LOGO</h1>
          <button
            className="lg:hidden  text-3xl"
            onClick={() => setDrawerOpen(false)}
          >
            &times;
          </button>
        </div>
        <div className="list-none flex items-center flex-col gap-6">
          <button
            className={`h-12 border shadow-xl rounded-xl w-56 px-5 py-2 -mb-px text-sm ${
              activeButton === "aboutUs"
                ? "text-white border-b-2 bg-purple-500"
                : "text-black "
            } sm:text-base whitespace-nowrap cursor-base focus:outline-none`}
            onClick={() => handleClick("aboutUs")}
          >
            About Us
          </button>
          <button
            className={`h-12  border shadow-xl rounded-xl w-56  px-5 py-2 -mb-px text-sm ${
              activeButton === "research"
                  ? "text-white border-b-2 bg-purple-500"
                : "text-black "
            } sm:text-base whitespace-nowrap cursor-base focus:outline-none`}
            onClick={() => handleClick("research")}
          >
            Research
          </button>
          <button
            className={`h-12  border shadow-xl rounded-xl w-56  px-5 py-2 -mb-px text-sm ${
              activeButton === "impact"
                 ? "text-white border-b-2 bg-purple-500"
                : "text-black "
            } sm:text-base whitespace-nowrap cursor-base focus:outline-none`}
            onClick={() => handleClick("impact")}
          >
            Impact
          </button>
          <button
            className={`h-12  border shadow-xl rounded-xl w-56  px-5 py-2 -mb-px text-sm ${
              activeButton === "forum"
                ? "text-white border-b-2 bg-purple-500"
                : "text-black "
            } sm:text-base whitespace-nowrap cursor-base focus:outline-none`}
            onClick={() => handleClick("forum")}
          >
            Forum
          </button>
          {
            data.user? ( <button
              onClick={handleLogout}
              className="h-12 w-56 rounded-lg flex justify-center items-center text-sm hover:bg-purple-500 text-center hover:text-white"
            >
              Log Out
            </button>):(
              <Link to={"/login"}
              
              className="h-12 w-56 rounded-lg flex justify-center items-center text-sm hover:bg-purple-500 text-center hover:text-white"
            >
              Log In
            </Link>
            )
          }
         
        </div>
      </div>

      <section className="space-y-8 w-full">
        <div className="h-16 flex lg:justify-end justify-between px-4 items-center w-full">
          {/* Drawer button */}
          <BiMenu className="text-3xl lg:hidden flex" onClick={toggleDrawer} />

          <div className="flex justify-center items-center gap-5">
            <BiBell className="text-3xl" />
            <Link
              to={"/"}
              className="bg-purple-500 text-white px-4 py-1 rounded-md"
            >
              Home
            </Link>
           
       
          </div>
        </div>
        <div className="m-8">
          {activeButton === "aboutUs" && <AboutUs />}
          {activeButton === "research" && <Research />}
          {activeButton === "impact" && <Impact />}
          {activeButton === "forum" && <Forum />}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
