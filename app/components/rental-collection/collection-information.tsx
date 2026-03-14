"use client";

import React, { useState } from "react";
import EmiratesSelect from "@/app/components/form-elements/select-dropdown/emirates-selector";
import { PossibleEmirateValues } from "@/app/constants/emirates";
import LocationSelector from "@/app/components/form-elements/select-dropdown/location-selector";
import { PossibleLocationValues } from "@/app/constants/locations";

export function CollectionInformation() {

   /* styles */
   const labelStyle = "mb-1.5 block text-sm font-semibold leading-tight lg:text-[14px] text-black";
   const inputStyle = "flex h-10 w-full items-center justify-between border border-gray-300 bg-white px-3 text-sm outline-none transition-all focus:border-blue-500 text-black";
   const elementStyle = "col-span-1";

   /* state management */
   const [dropoffEmirate, setDropoffEmirate] = useState<PossibleEmirateValues | "">("");
   const [dropoffLocation, setDropoffLocation] = useState<PossibleLocationValues | "">("");
   const [dropoffAddress, setDropoffAddress] = useState<string>("");


   return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
      <div className={elementStyle}>
         <label className={labelStyle}>Collection City</label>
         <EmiratesSelect
            name="collection-city"
            value={dropoffEmirate}
            onChange={(val) => {
               setDropoffEmirate(val as PossibleEmirateValues);
               setDropoffLocation(""); // reset when emirate changes
            }}
         />
      </div>

      <div className={elementStyle}>
         <label className={labelStyle}>Collection Area</label>
         <LocationSelector
            emirate={dropoffEmirate as PossibleEmirateValues}
            value={dropoffLocation}
            name="collection-area"
            onChange={ (val) => setDropoffLocation(val as PossibleLocationValues) }
         />
      </div>

      <div className={elementStyle}>
         <label className={labelStyle}>Collection Address</label>
         <div className={inputStyle}>
            <input
               type="text"
               className={ inputStyle }
               value={ dropoffAddress }
               name="collection-address"
               onChange={(e) => setDropoffAddress(e.target.value)}
            />
         </div>
      </div>
   </div>
}