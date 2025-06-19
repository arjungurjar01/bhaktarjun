"use client";

import { Button } from "@/components/ui/button";
import React, { FC, useEffect, useState } from "react";

const Counter: FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);

  const handleCount = (): void => {
    setCounter(counter + 1);
  };
  const handleRefresh = (): void => {
    setCounter(0);
  };
  const handleSave = (): void => {
    const newTotalCount: number = totalCount + counter;
    setTotalCount(newTotalCount);
    setCounter(0);
    localStorage.setItem("totalCount", newTotalCount.toString());
  };
  useEffect(() => {
    const storedTotal: string | null = localStorage.getItem("totalCount");
    if (storedTotal) {
      setTotalCount(Number(storedTotal));
    }
  }, []);

  return (
    <div className="h-full w-full flex items-center justify-center p-4">
      <div className="w-full max-w-4xl  mx-auto">
    <div className="rounded-[42px] w-full bg-[#16161d] px-4 py-8 sm:py-6 lg:p-10 flex flex-col items-center justify-center">
       <div className="w-full flex justify-end mb-6 sm:mb-8">
            <h1 className="text-white text-sm sm:text-md lg:text-lg font-normal px-3 sm:px-4 py-1 rounded-md bg-gray-800/50">
              Total: {totalCount}
            </h1>
          </div>

      <div className="flex items-center justify-center flex-col gap-8 sm:gap-12 lg:gap-16 xl:gap-24 w-full">
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white font-bold text-center">{counter}</h2>
          <div className="flex gap-3 sm:gap-6 lg:gap-10 flex-wrap justify-center">
            <Button
              className="cursor-pointer border border-white text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2 bg-transparent hover:bg-white/10 text-white"
              onClick={handleRefresh}
            >
              Refresh
            </Button>
            <Button
              className="cursor-pointer bg-[#ffe52f] text-black hover:bg-white text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2 font-medium"
              onClick={handleSave}
            >
              Save
            </Button>
          </div>
        </div>
        <Button
          className="cursor-pointer bg-[#ffe52f] hover:bg-yellow-300 rounded-full  text-[254px] text-center pb-16  active:scale-99 h-60 w-60 xs:h-36 xs:w-36 xs:text-7xl sm:h-40 sm:w-40 sm:text-8xl md:h-48 md:w-48 md:text-9xl lg:h-64 lg:w-64 lg:text-[180px]"
          onClick={handleCount}
        ></Button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Counter;
