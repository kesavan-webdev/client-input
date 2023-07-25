"use client";
import { createContext, useState, useEffect } from "react";
import { dummyData } from "../client-data/dummyData";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
export const TableContext = createContext();
export const TableContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  // data sending

  // const data = dummyData;

  // Get all documents in a collection
  const getAllData = async () => {
    const querySnapshot = await getDocs(
      collection(db, "Bussiness-Information")
    );
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      setData((prev) => [...prev, doc.data()]);
      console.log(data);
    });
  };
  useEffect(() => {
    getAllData();
  }, []);

  // random key generator
  let randomKey = Math.round(Math.random() * 100);
  // console.log(randomKey);
  // sorting

  return (
    <TableContext.Provider value={{ data, randomKey }}>
      {children}
    </TableContext.Provider>
  );
};
