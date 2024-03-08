import { createContext, useState } from "react";

export const catagoryContext = createContext();

const CatagoryContextProvider = ({ children }) => {
  const [catagory, setCatagory] = useState("Grocery");
  return (
    <catagoryContext.Provider value={{ catagory, setCatagory }}>
      {children}
    </catagoryContext.Provider>
  );
};

export default CatagoryContextProvider;
