"use client";

import { getDatePlusDays } from "@/app/utils/date-utility";
import React from "react";
import {formInputStyle, labelStyle} from "@/app/styles/form-styles";

export function DropoffDatetime() {
   return <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
         <div className="col-span-2">
            <label className={labelStyle}>Drop off Date</label>
            <input
               type="date"
               defaultValue={getDatePlusDays(3)}
               className={formInputStyle}
               name="drop-off-date"
            />
         </div>

         <div className="col-span-2">
            <label className={labelStyle}>Drop off Time</label>
            <input
                type="time"
                defaultValue="08:00"
                className={formInputStyle}
                name="drop-off-time"
            />
         </div>
      </div>
   </>
}