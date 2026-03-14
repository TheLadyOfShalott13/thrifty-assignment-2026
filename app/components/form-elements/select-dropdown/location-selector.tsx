"use client";

import { LocationSelectProps } from "@/app/interfaces/location-select-props";
import { LOCATIONS } from "@/app/constants/locations";


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
         className={`border rounded-md px-3 py-2 text-gray-900 w-full`}
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