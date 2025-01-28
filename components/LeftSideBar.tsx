"use client";

import { sidebarLinks } from "@/constants";
import { SignedIn, SignedOut, useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import imagesData from "../data/images.json";

// Mock data for tags (replace with your actual data fetching logic)


const LeftSideBar = () => {
  const pathname = usePathname();
  const { signOut } = useAuth();
  const [showTags, setShowTags] = useState(false);

  // Extract unique tags from the images data
  const allTags = Array.from(
    new Set(imagesData.images.flatMap((image) => image.tags))
  );

  return (
    <section
      className="background-light900_dark200 light-border sticky left-0 top-0 flex h-screen flex-col
                            justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300
                            dark:shadow-none max-sm:hidden lg:w-[266px] custom-scrollbar"
    >
      <div className="flex flex-1 flex-col gap-3">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;

          return (
            <div key={item.route}>
              <Link
                href={item.route}
                className={`${
                  isActive
                    ? "primary-gradient rounded-lg text-light-900"
                    : "text-dark300_light900"
                } flex item-center justify-start gap-4 bg-transparent p-4`}
                onClick={() => {
                  if (item.label === "Tags") {
                    setShowTags(!showTags); // Toggle tags visibility
                  }
                }}
              >
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  width={20}
                  height={20}
                  className={`${isActive ? "" : "invert-colors"}`}
                />
                <p
                  className={`${
                    isActive ? "base-bold" : "base-medium"
                  } max-lg:hidden`}
                >
                  {item.label}
                </p>
              </Link>

              {/* Display tags if the "Tags" button is clicked */}
              {item.label === "Tags" && showTags && (
                <div className="mt-2 flex flex-wrap gap-2 pl-4">
                  {allTags.map((tag) => (
                    <Badge
                      key={tag}
                      className="subtle-medium background-light800_dark300 text-dark400_light500 
                                 inline-flex items-center gap-2 rounded-md border-none py-2 capitalize"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <SignedIn>
        <Button
          onClick={() => signOut()}
          className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
        >
          <Image
            src={"/assets/icons/account.svg"}
            alt="logout"
            width={20}
            height={20}
            className="invert-colors lg:hidden"
          />
          <span className="primary-text-gradient max-lg:hidden">Logout</span>
        </Button>
      </SignedIn>
      <SignedOut>
        <div className="flex flex-col gap-3 pt-15">
          <Link href={"/sign-in"}>
            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src={"/assets/icons/account.svg"}
                alt="login"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="primary-text-gradient max-lg:hidden">Login</span>
            </Button>
          </Link>

          <Link href={"/sign-up"}>
            <Button
              className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px]
                                             w-full rounded-lg border px-4 py-3 shadow-none"
            >
              <Image
                src={"/assets/icons/sign-up.svg"}
                alt="sign-up"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="max-lg:hidden">Sign up</span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </section>
  );
};

export default LeftSideBar;