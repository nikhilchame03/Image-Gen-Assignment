"use client";

import { useState } from "react";
import imagesData from "../data/images.json";
import Image from "next/image";
import { Badge } from "./ui/badge";

interface ImageRenderProps {
  searchTerm: string;
  selectedFilter: string;
}

export default function ImageRender({ searchTerm, selectedFilter }: ImageRenderProps) {
  const [images, setImages] = useState(imagesData.images);

  // Filter images based on the search term and selected filter
  const filteredImages = images.filter((image) => {
    const matchesSearchTerm = image.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter ? image.aiModel === selectedFilter : true;
    return matchesSearchTerm && matchesFilter;
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">AI Image Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image) => (
          <div key={image.id} className="border rounded-lg overflow-hidden shadow-lg">
            <Image
              src={image.imageUrl}
              alt={image.title}
              className="w-full h-48 object-cover"
              width={400}
              height={300}
            />
            <div className="p-4 flex flex-col items-start gap-2">
              <Badge
                className="subtle-medium background-light800_dark300 text-dark400_light500 
                           inline-flex items-center gap-2 rounded-md border-none py-2 capitalize text-dark400_light500"
              >
                {image.title}
              </Badge>
              <Badge
                className="subtle-medium background-light800_dark300 text-dark400_light500 
                           inline-flex items-center gap-2 rounded-md border-none py-2 capitalize"
              >
                {image.aiModel}
              </Badge>
              <Badge
                className="subtle-medium background-light800_dark300 text-dark400_light500 
                           inline-flex items-center gap-2 rounded-md border-none py-2 capitalize"
              >
                {new Date(image.generationDate).toLocaleDateString()}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}