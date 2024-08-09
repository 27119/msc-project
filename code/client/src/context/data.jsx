import PropTypes from "prop-types";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    user: null,
    token: "",
  });

  useEffect(() => {
    const storedData = localStorage.getItem("5661user");
    if (storedData) {
      try {
        setData(JSON.parse(storedData));
      } catch (error) {
        console.error("Error parsing stored data", error);
      }
    }
  }, []);

  useEffect(() => {
    if (data.token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    }
    localStorage.setItem("5661user", JSON.stringify(data));
  }, [data]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
