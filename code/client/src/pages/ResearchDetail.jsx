/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ResearchDetail = () => {
  const { id } = useParams();
  const [research, setResearch] = useState(null);
  const [loading, setLoading] = useState(true);
  

  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    const fetchResearchDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/v1/get-research/${id}`
        );
        setResearch(response.data);
      } catch (error) {
        console.error("Error fetching research detail:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResearchDetail();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  if (!research) return <div>Research not found</div>;

  return (
    <div className="flex pt-12 px-6 md:px-20 items-center justify-center bg-hero md:h-screen overflow-hidden">
      <div className="flex flex-col gap-6 md:flex-row items-center max-w-8xl">
        <div className="w-full md:w-1/2 lg:pr-32">
          <h2 className="text-4xl lg:text-5xl text-center md:text-left text-purple-900 leading-tight font-medium">{research.title}</h2>
          <h3 className="mt-6 md:mt-10 text-md lg:text-md text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
            {research.description}
          </h3>
          <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
            <button
              onClick={() => navigate(-1)}
              className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-purple-500 text-white border-2 border-purple-500"
            >
              Go Back
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={`http://localhost:3001/api/v1/get-image/${research._id}`}
            alt={research.title}
          />
        </div>
      </div>
    </div>
  );
};

export default ResearchDetail;
