import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CreateReserch from "../components/CreateReserch";
import { useData } from "../context/data";

const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};

const Research = () => {
  const [articles, setArticles] = useState([]);
  const [caseStudies, setCaseStudies] = useState([]);
  const [guides, setGuides] = useState([]);
  const [loadingArticles, setLoadingArticles] = useState(true);
  const [loadingCaseStudies, setLoadingCaseStudies] = useState(true);
  const [loadingGuides, setLoadingGuides] = useState(true);

  const { data } = useData();

  useEffect(() => {
    const fetchResearch = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/v1/get-research"
        );
        const data = response.data;

       
        data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        const articles = data
          .filter((item) => item.category === "article")
          .slice(0, 3);
        const caseStudies = data
          .filter((item) => item.category === "caseStudy")
          .slice(0, 3);
        const guides = data
          .filter((item) => item.category === "Guids")
          .slice(0, 3);

        setArticles(articles);
        setCaseStudies(caseStudies);
        setGuides(guides);
      } catch (error) {
        console.error("Error fetching research data:", error);
      } finally {
        setLoadingArticles(false);
        setLoadingCaseStudies(false);
        setLoadingGuides(false);
      }
    };

    fetchResearch();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-end">
        {data.user ? <CreateReserch /> : <></>}
      </div>
      <h1 className="text-3xl underline text-center">Best Articles</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        {loadingArticles ? (
          <div className="text-center col-span-3 py-24">Loading...</div>
        ) : (
          articles.map((article) => (
            <div
              key={article._id}
              className="h-fit p-4 rounded-xl bg-gray-100 border shadow-xl"
            >
              <img
                className="h-2/3 w-full rounded-lg"
                src={`http://localhost:3001/api/v1/get-image/${article._id}`}
                alt=""
              />
              <h1 className="text-2xl py-1 underline font-semibold capitalize">
                {article.title}
              </h1>
              <p className="text-sm">{truncateText(article.description, 25)}</p>
              <Link to={`/research/${article._id}`}>
                <button className="bg-green-500 px-4 py-2 mt-2 rounded-lg text-white">
                  Read More..
                </button>
              </Link>
            </div>
          ))
        )}
      </div>

      <h1 className="text-3xl underline text-center">Case Studies</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        {loadingCaseStudies ? (
          <div className="text-center col-span-3 py-24">Loading...</div>
        ) : (
          caseStudies.map((caseStudy) => (
            <div
              key={caseStudy._id}
              className="h-fit p-4 rounded-xl bg-gray-100 border shadow-xl"
            >
              <img
                className="h-2/3 w-full rounded-lg"
                src={`http://localhost:3001/api/v1/get-image/${caseStudy._id}`}
                alt=""
              />
              <h1 className="text-xl font-semibold capitalize">
                {caseStudy.title}
              </h1>
              <p>{truncateText(caseStudy.description, 25)}</p>
              <Link to={`/research/${caseStudy._id}`}>
                <button className="bg-green-500 px-4 py-2 mt-2 rounded-lg text-white">
                  Read More..
                </button>
              </Link>
            </div>
          ))
        )}
      </div>

      <h1 className="text-3xl underline text-center">Guides</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        {loadingGuides ? (
          <div className="text-center col-span-3 py-24">Loading...</div>
        ) : (
          guides.map((guide) => (
            <div
              key={guide._id}
              className="h-fit p-4 rounded-xl bg-gray-100 border shadow-xl"
            >
              <img
                className="h-2/3 w-full rounded-lg"
                src={`http://localhost:3001/api/v1/get-image/${guide._id}`}
                alt=""
              />
              <h1 className="text-xl font-semibold capitalize">
                {guide.title}
              </h1>
              <p>{truncateText(guide.description, 25)}</p>
              <Link to={`/research/${guide._id}`}>
                <button className="bg-green-500 px-4 py-2 mt-2 rounded-lg text-white">
                  Read More..
                </button>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Research;
