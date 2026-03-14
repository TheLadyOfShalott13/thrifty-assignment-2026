"use client";

import { LocationSelectProps } from "@/app/interfaces/location-select-props";
import { LOCATIONS } from "@/app/constants/locations";
import { selectStyle } from "@/app/styles/form-styles";


export default function LocationSelector({
   emirate,
   name,
   value = "",
   onChange,
}: LocationSelectProps) {
   const locations = emirate ? LOCATIONS[emirate] : [];

   return (
      <select
         name={name}
         value={value}
         onChange={(e) => onChange?.(e.target.value)}
         className={selectStyle}
         disabled={!emirate}
      >
         <option value="">Select</option>
         {locations?.map((loc) => (
            <option key={loc.value} value={loc.value}>
               {loc.label}
            </option>
         ))}
      </select>
   );
}