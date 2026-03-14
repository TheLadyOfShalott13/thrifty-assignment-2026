"use client";

import React, { useState } from "react";
import EmiratesSelect from "@/app/components/form-elements/select-dropdown/emirates-selector";
import { PossibleEmirateValues } from "@/app/constants/emirates";
import LocationSelector from "@/app/components/form-elements/select-dropdown/location-selector";
import { PossibleLocationValues } from "@/app/constants/locations";
import {singleColStyle, labelStyle, formInputStyle, doubleColStyle} from "@/app/styles/form-styles";

export function CollectionInformation() {
   const [dropoffEmirate, setDropoffEmirate] = useState<PossibleEmirateValues | "">("");
   const [dropoffLocation, setDropoffLocation] = useState<PossibleLocationValues | "">("");
   const [dropoffAddress, setDropoffAddress] = useState<string>("");


   return <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5 pb-4">
      <div className={singleColStyle}>
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

      <div className={singleColStyle}>
         <label className={labelStyle}>Collection Area</label>
         <LocationSelector
            emirate={dropoffEmirate as PossibleEmirateValues}
            value={dropoffLocation}
            name="collection-area"
            onChange={ (val) => setDropoffLocation(val as PossibleLocationValues) }
         />
      </div>

      <div className={doubleColStyle}>
         <label className={labelStyle}>Collection Address</label>
         <div className={ formInputStyle }>
            <input
               type="text"
               className={ formInputStyle }
               value={ dropoffAddress }
               name="collection-address"
               onChange={(e) => setDropoffAddress(e.target.value)}
            />
         </div>
      </div>
   </div>
}