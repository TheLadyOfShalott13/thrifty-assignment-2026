"use client";

import { getDatePlusDays } from "@/app/utils/date-utility";
import React from "react";

export function DropoffDatetime() {
   /* styles */
   const labelStyle = "mb-1.5 block text-sm font-semibold leading-tight lg:text-[14px] text-black";
   const inputStyle = "flex h-10 w-full items-center justify-between border border-gray-300 bg-white px-3 text-sm outline-none transition-all focus:border-blue-500 text-black";


   return <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
         <div className="col-span-2">
            <label className={labelStyle}>Drop off Date</label>
            <input
               type="date"
               defaultValue={getDatePlusDays(3)}
               className={inputStyle}
               name="drop-off-date"
            />
         </div>

         <div className="col-span-2">
            <label className={labelStyle}>Drop off Time</label>
            <div className={inputStyle}>
               <input
                  type="time"
                  defaultValue="08:00"
                  className={inputStyle}
                  name="drop-off-time"
               />
            </div>
         </div>
      </div>
   </>
}