/* eslint-disable no-unused-vars */
import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useData } from "../context/data";

const Homepage = () => {
  const [faqs, setFaqs] = useState([
    {
      ques: "",
      ans: "",
    },
    {
      ques: "",
      ans: "",
    },
    {
      ques: "",
      ans: "",
    },
    {
      ques: "",
      ans: "",
    },
    {
      ques: "",
      ans: "",
    },
    {
      ques: "",
      ans: "",
    },
  ]);

  const { data } = useData();
  return (
    <div>
      <Navbar />
      {/* hero section */}
      <section className="overflow-hidden h-full py-12 bg-gray-200 sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
            <p>Welcome to our website</p>
            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">
              Faster websites, lower emissions: Win-win with sustainable design
            </h2>

            <p className=" text-gray-500 md:mt-4 md:block">
              Create beautiful websites with a minimal environmental impact.
            </p>

            <div className="mt-4 md:mt-8">
              {data.user ? (
                <Link
                  to={"/dashboard"}
                  className="flex w-56 text-md justify-center items-center gap-2 rounded bg-green-500 px-12 py-3  font-medium text-white transition hover:bg-green-700 focus:outline-none focus:ring "
                >
                  Explore
                  <span className="text-md">
                    <MdArrowForwardIos />
                  </span>
                </Link>
              ) : (
                <Link
                  to={"/signup"}
                  className="flex w-56 justify-center items-center gap-2 rounded bg-green-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-green-700 focus:outline-none focus:ring "
                >
                  Sign Up Now{" "}
                  <span className="text-md">
                    <MdArrowForwardIos />
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>

        <img
          alt=""
          src="https://images.unsplash.com/photo-1472313420546-a46e561861d8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-56 lg:w-11/12 w-full object-cover sm:h-full"
        />
      </section>

      {/*  Latest Successful Implementations section */}

      <div className="">
        <h1 className="text-3xl text-center py-6">
          {" "}
          Latest Successful Implementations
        </h1>

        <div className="lg:px-20 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 px-8">
          <div className="flex flex-col justify-center items-center bg-gray-100">
            <div
              className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full h-80 relative group"
              style={{
                backgroundImage:
                "url('https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
                  TITLE
                </h2>
              </div>
              <p className="absolute inset-0 bg-white h-full bg-opacity-80 text-gray-700 leading-tight mb-4 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                eu sapien porttitor, blandit velit ac, vehicula elit. Nunc et ex
                at turpis rutrum viverra.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-gray-100">
            <div
              className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full h-80 relative group"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1515344905723-babc01aac23d?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
                  TITLE
                </h2>
              </div>
              <p className="absolute inset-0 bg-white h-full bg-opacity-80 text-gray-700 leading-tight mb-4 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                eu sapien porttitor, blandit velit ac, vehicula elit. Nunc et ex
                at turpis rutrum viverra.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-gray-100">
            <div
              className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full h-80 relative group"
              style={{
                backgroundImage:
                "url('https://images.unsplash.com/photo-1499883614574-22631ce07525?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
                  TITLE
                </h2>
              </div>
              <p className="absolute inset-0 bg-white h-full bg-opacity-80 text-gray-700 leading-tight mb-4 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                eu sapien porttitor, blandit velit ac, vehicula elit. Nunc et ex
                at turpis rutrum viverra.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* faqs */}

      <h1 className="text-center text-3xl py-6">FAQs</h1>
      <div className="flex lg:flex-row flex-col lg:px-20 p-4 gap-6">
        <div className="lg:w-1/2 w-full h-full">
          <img
            className=" rounded-lg"
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="lg:w-2/3 w-full h-full ">
          {faqs.map((items, index) => (
            <details
              key={index}
              className="group py-1 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                <h2 className="font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing?
                </h2>

                <IoIosArrowDown />
              </summary>

              <p className="mt-4 px-4 leading-relaxed text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                veritatis molestias culpa in, recusandae laboriosam neque
                aliquid libero nesciunt voluptate dicta quo officiis explicabo
                consequuntur distinctio corporis earum similique!
              </p>
            </details>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
