import { useContext, createContext, useEffect, useState } from "react";

const PdfContext = createContext();

export const PdfContextProvider = ({ children }) => {
  const [pdfURL, setPdfURL] = useState(null);
  const [pdfName, setPdfName] = useState("document");
  return (
    <PdfContext.Provider value={{ pdfURL, setPdfURL }}>
      {children}
    </PdfContext.Provider>
  );
};

export const PdfFile = () => {
  return useContext(PdfContext);
};
