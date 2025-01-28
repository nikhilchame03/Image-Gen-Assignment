"use client";

import React, { useState } from "react";
import ImageRender from "@/components/ImageRender";
import GlobalSearch from "@/components/search/GlobalSearch";
import Filter from "@/components/Filter";
import { HomePageFilters } from "@/constants/filter";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <div className="flex  gap-5">
        <GlobalSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px]   "
          containerClasses="  "
        ></Filter>
      </div>

      <ImageRender searchTerm={searchTerm} />
    </div>
  );
};

export default Home;
