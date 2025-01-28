"use client";

import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";

interface GlobalSearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const GlobalSearch = ({ searchTerm, setSearchTerm }: GlobalSearchProps) => {
  return (  
    <div className="relative w-full  ">
      <div className="background-light800_dark300 relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
        <Image
          src="/assets/icons/search.svg"
          alt="Search"
          width={24}
          height={24}
          className="cursor-pointer"
        />

        <Input
          type="text"
          placeholder="Search globally"
          value={searchTerm}
          className="paragraph-regular no-focus placeholder text-dark200_light900 background-light800_dark300 border-none shadow-none outline-none"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default GlobalSearch;