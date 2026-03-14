"use client";

import React, { useState } from "react";
import { PossibleEmirateValues } from "@/app/constants/emirates";
import { PossibleLocationValues } from "@/app/constants/locations";
import EmiratesSelect from "@/app/components/form-elements/select-dropdown/emirates-selector";
import LocationSelector from "@/app/components/form-elements/select-dropdown/location-selector";
import { getDatePlusDays } from "@/app/utils/date-utility";
import { RentalFormGridProps } from "@/app/interfaces/rental-form-grid-props";
import { DropoffDatetime } from "@/app/components/rental-dropoff/dropoff-datetime";
import { CollectionInformation } from "@/app/components/rental-collection/collection-information";
import { CollectionTypePicker } from "@/app/components/rental-collection/collection-type-picker";
import { DropoffInformation } from "@/app/components/rental-dropoff/dropoff-information";
import { ReturnTypePicker } from "@/app/components/return-type-picker";
import {formInputStyle, labelStyle, singleColStyle, submitButtonStyle} from "@/app/styles/form-styles";

export default function DeliveryForm({ tab = "daily" }: RentalFormGridProps) {
   const [deliveryCity, setDeliveryCity] = useState<PossibleEmirateValues | "">("");
   const [deliveryArea, setDeliveryArea] = useState<PossibleLocationValues | "">("");
   const [deliveryAddress, setDeliveryAddress] = useState<string>("");
   const [isDropOff, setIsDropOff] = useState<boolean>(false);
   const [isSameAsDelivery, setIsSameAsDelivery] = useState<boolean>(false);
   const [isSpecifyLocation, setIsSpecifyLocation] = useState<boolean>(false);

   return (
      <div className="text-black">
         <div>
            <button className="mb-mob-12 flex items-center gap-mob-8 text-mob-16 font-semibold leading-mob-22 text-Black sm:mb-tab-12 sm:gap-tab-8 sm:text-tab-16 sm:leading-tab-22 lg:mb-web-12 lg:gap-web-8 lg:text-web-16 lg:leading-web-22">
               <b>&lt;</b>&nbsp;Deliver to me
            </button>
            <p className="mb-mob-12 text-mob-15 leading-mob-24 sm:mb-tab-12 sm:text-tab-15 sm:leading-tab-24 lg:mb-web-11 lg:text-web-15 lg:leading-web-24">
               *Delivery time may vary due to traffic conditions. We appreciate your patience as we work diligently to ensure your delivery reaches you as soon as possible. Additional charges for delivery and collection may apply.
            </p>
         </div>
         <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
            <div className={singleColStyle}>
               <label className={labelStyle}>Delivery City</label>
               <EmiratesSelect
                  name="delivery-city"
                  value={ deliveryCity }
                  onChange={(val) => {
                     setDeliveryCity(val as PossibleEmirateValues);
                     setDeliveryArea(""); // reset when emirate changes
                  }}
               />
            </div>

            <div className="col-span-2 sm:col-span-1">
               <label className={labelStyle}>Delivery Area</label>
               <LocationSelector
                  emirate={ deliveryCity as PossibleEmirateValues }
                  value={ deliveryArea }
                  name="delivery-area"
                  onChange={ (val) => setDeliveryArea(val as PossibleLocationValues) }
               />
            </div>

            <div className="col-span-2">
               <label className={labelStyle}>Delivery Address</label>
               <input
                  type="text"
                  className={ formInputStyle }
                  value={ deliveryAddress }
                  name="delivery-area"
                  onChange={(e) => setDeliveryAddress(e.target.value)}
               />
            </div>


            <div className="col-span-2">
               <label className={labelStyle}>Delivery Date</label>
               <input
                  type="date"
                  defaultValue={getDatePlusDays()}
                  className={formInputStyle}
                  name="delivery-date"
               />
            </div>

            <div className="col-span-2">
               <label className={labelStyle}>Delivery Time</label>
               <input
                   type="time"
                   defaultValue="08:00"
                   className={formInputStyle}
                   name="delivery-time"
               />
            </div>
         </div>
         <div>
            {
               (tab == "daily") ?
                  <>
                     <div className="mt-mob-10 w-full sm:mt-tab-10 lg:mt-web-10">
                        <div className="mb-mob-19 sm:mb-tab-17 lg:mb-web-20">
                           <label className="mb-mob-5 block text-mob-14 font-semibold sm:mb-tab-6 lg:mb-web-6">
                              How would you like to return the car?
                           </label>

                           <ReturnTypePicker
                              setIsSameAsDelivery={setIsSameAsDelivery}
                              setIsSpecifyLocation={setIsSpecifyLocation}
                              isDropOff={isDropOff}
                              setIsDropOff = {setIsDropOff}
                           />

                           {
                              (isDropOff) ? <DropoffInformation />
                                 : <div>
                                    <CollectionTypePicker
                                       isSameAsDelivery={isSameAsDelivery}
                                       setIsSameAsDelivery={setIsSameAsDelivery}
                                       isSpecifyLocation={isSpecifyLocation}
                                       setIsSpecifyLocation={setIsSpecifyLocation}
                                    />
                                    {isSpecifyLocation && <CollectionInformation />}
                                    {(isSpecifyLocation || isSameAsDelivery) && <DropoffDatetime />}
                                 </div>

                           }
                        </div>
                     </div>

                     {/* Footer */}
                     <div className="mt-mob-10 flex pt-4 items-center justify-between border-t border-[#c2c2c259] pt-mob-20 sm:mt-tab-10 lg:mt-web-15">
                        <p className="max-w-[70%] text-mob-14 sm:text-tab-15 lg:text-web-15">
                           *Additional charges for delivery and collection may apply.
                        </p>
                        <button type="submit" className={submitButtonStyle}>
                           Search
                        </button>
                     </div>
                  </>
                  : ""
            }
         </div>
      </div>
   );
}