"use client";

import React, { useState } from "react";
import EmiratesSelect from "@/app/components/form-elements/select-dropdown/emirates-selector";
import LocationSelector from "@/app/components/form-elements/select-dropdown/location-selector";
import { PossibleEmirateValues } from "@/app/constants/emirates";
import { PossibleLocationValues } from "@/app/constants/locations";
import { RentalFormGridProps } from "@/app/interfaces/rental-form-grid-props";
import { getDatePlusDays } from "@/app/utils/date-utility";


const RentalFormGrid = ({ tab = "daily" }: RentalFormGridProps) => {

   /* styles */
   const labelStyle = "mb-1.5 block text-sm font-semibold leading-tight lg:text-[14px] text-black";
   const inputStyle = "flex h-10 w-full items-center justify-between border border-gray-300 bg-white px-3 text-sm outline-none transition-all focus:border-blue-500 text-black";
   const elementStyle = "col-span-1";

   /* state management */
   const [pickupEmirate, setPickupEmirate] = useState<PossibleEmirateValues | "">("");
   const [dropoffEmirate, setDropoffEmirate] = useState<PossibleEmirateValues | "">("");
   const [pickupLocation, setPickupLocation] = useState<PossibleLocationValues | "">("");
   const [dropoffLocation, setDropoffLocation] = useState<PossibleLocationValues | "">("");


   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
         <div className={elementStyle}>
            <label className={labelStyle}>Pick Up City</label>
            <EmiratesSelect
               name="pick-up-city"
               value={pickupEmirate}
               onChange={(val) => {
                  setPickupEmirate(val as PossibleEmirateValues);
                  setPickupLocation(""); // reset when emirate changes
               }}
            />
         </div>

         <div className={elementStyle}>
            <label className={labelStyle}>Pick Up Location</label>
            <LocationSelector
               emirate={pickupEmirate as PossibleEmirateValues}
               value={pickupLocation}
               name="pick-up-location"
               onChange={ (val) => setPickupLocation(val as PossibleLocationValues) }
            />
         </div>

         <div className={elementStyle}>
            <label className={labelStyle}>Pick Up Date</label>
            <input
               type="date"
               defaultValue={getDatePlusDays()}
               className={inputStyle}
               name="pick-up-date"
            />
         </div>

         <div className={elementStyle}>
            <label className={labelStyle}>Pick Up Time</label>
            <div className={inputStyle}>
               <input
                  type="time"
                  defaultValue="08:00"
                  className={inputStyle}
                  name="pick-up-time"
               />
            </div>
         </div>

         {
            (tab == "daily") ? <>
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
            </> : ""

         }
      </div>
   );
};

export default RentalFormGrid;