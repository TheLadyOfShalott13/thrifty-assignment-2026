"use client";

import { EMIRATES } from "@/app/constants/emirates";
import { EmiratesSelectProps } from "@/app/interfaces/emirates-select-props";


export default function EmiratesSelect({
   name,
   value = "",
   onChange,
}: EmiratesSelectProps) {
   return (
      <select
         name={name}
         value={value}
         onChange={(e) => onChange?.(e.target.value)}
         className={`border rounded-md px-3 py-2 text-gray-900 w-full`}
      >
         <option value="">Select</option>
         {
            EMIRATES.map((emirate) => (
               <option key={emirate.value} value={emirate.value}>
                  {emirate.label}
               </option>
            ))
         }
      </select>
   );
}