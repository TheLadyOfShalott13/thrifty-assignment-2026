"use client";

import { EMIRATES } from "@/app/constants/emirates";
import { EmiratesSelectProps } from "@/app/interfaces/emirates-select-props";
import { selectStyle } from "@/app/styles/form-styles";


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
         className={selectStyle}
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