"use client";

import axios from "axios";
import { useState, useEffect } from "react";

const Competitions = () => {
  const [data, setData] = useState<Array<any>>([]);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const slugs = [
      "europe-league",
      "copa-america-2022",
      "asian-cup-2022",
      "african-nations-cup",
      "england-premier-league",
    ];

    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          slugs.map(async (slug) => {
            const response = await axios.get(
              `https://camiestas-futbol.effectstudios.co/api/v1/product-category-slug/${slug}`
            );
            return response.data.category;
          })
        );

        setData(responses);
        setIsDone(true);
        console.log(responses);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isDone ? (
        data.map((item) => (
          <div className="w-full flex flex-col gap-4" key={item?.slug}>
            <img src={item?.image} alt="" className="w-full object-cover" />
            <p className="text-base font-bold text-black">{item?.title}</p>
          </div>
        ))
      ) : (
        <>
          <div className="w-full h-32 custom-bg flex-shrink-0"></div>
          <div className="w-full h-32 custom-bg flex-shrink-0"></div>
          <div className="w-full h-32 custom-bg flex-shrink-0"></div>
          <div className="w-full h-32 custom-bg flex-shrink-0"></div>
          <div className="w-full h-32 custom-bg flex-shrink-0"></div>
        </>
      )}
    </>
  );
};
export default Competitions;
