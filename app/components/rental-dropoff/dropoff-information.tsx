import EmiratesSelect from "@/app/components/form-elements/select-dropdown/emirates-selector";
import { PossibleEmirateValues } from "@/app/constants/emirates";
import LocationSelector from "@/app/components/form-elements/select-dropdown/location-selector";
import { PossibleLocationValues } from "@/app/constants/locations";
import { getDatePlusDays } from "@/app/utils/date-utility";
import React, { useState } from "react";

export function DropoffInformation() {
   /* styles */
   const labelStyle = "mb-1.5 block text-sm font-semibold leading-tight lg:text-[14px] text-black";
   const inputStyle = "flex h-10 px-3 py-2 rounded-md w-full items-center justify-between bg-white text-sm outline-none transition-all focus:border-blue-500 text-black";
   const elementStyle = "col-span-1";

   /* state management */
   const [dropoffEmirate, setDropoffEmirate] = useState<PossibleEmirateValues | "">("");
   const [dropoffLocation, setDropoffLocation] = useState<PossibleLocationValues | "">("");

   return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
      <div className={elementStyle}>
         <label className={labelStyle}>Drop Off City</label>
         <EmiratesSelect
            name="drop-off-city"
            value={dropoffEmirate}
            onChange={(val) => {
               setDropoffEmirate(val as PossibleEmirateValues);
               setDropoffLocation(""); // reset when emirate changes
            }}
         />
      </div>

      <div className={elementStyle}>
         <label className={labelStyle}>Drop Off Location</label>
         <LocationSelector
            emirate={dropoffEmirate as PossibleEmirateValues}
            name="drop-off-location"
            value={dropoffLocation}
            onChange={ (val) => setDropoffLocation(val as PossibleLocationValues) }
         />
      </div>

      <div className={elementStyle}>
         <label className={labelStyle}>Drop off Date</label>
         <input
            type="date"
            defaultValue={getDatePlusDays(3)}
            className={inputStyle}
            name="drop-off-date"
         />
      </div>

      <div className={elementStyle}>
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
   </div>;
}