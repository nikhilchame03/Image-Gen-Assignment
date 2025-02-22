"use client"

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  filters: {
    name: string;
    value: string;
  }[];
  otherClasses?: string;
  containerClasses?: string;
}

const Filter = ({ filters, otherClasses, containerClasses }: Props) => {
  return (

    <div className={`relative ${containerClasses} `}>
      <Select>
        <SelectTrigger className={` ${otherClasses}   light-border
            background-light800_dark300 text-dark500_light700 border px-5 py-2.5 
        `}>
          <div className="flex-1 text-left min-w-[100px] " >
          <SelectValue placeholder="AI Model" />
          </div>
          
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="background-light800_dark300 text-dark500_light700 border-none">
            {filters.map((item)=>(
              <SelectItem key={item.value} value={item.value}>
                {item.name}
              </SelectItem>
              
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filter;
