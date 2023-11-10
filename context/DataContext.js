// DataContext.js
import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState("Hello from context");

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

export { DataProvider, useData };
