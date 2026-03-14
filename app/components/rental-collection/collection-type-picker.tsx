import React from "react";
import { CollectionTypeProps } from "@/app/interfaces/collection-type-props";

export function CollectionTypePicker({
   isSameAsDelivery,
   setIsSameAsDelivery,
   isSpecifyLocation,
   setIsSpecifyLocation,
}: CollectionTypeProps) {
   /* styles */
   const elementStyle = "col-span-1";
   const listStyle = "col-span-full flex gap-4 gap-mob-10 sm:gap-tab-13 lg:gap-web-13";
   const listItemStyle = "flex items-center gap-1 gap-mob-6 sm:gap-tab-6 lg:gap-web-6";
   const listLabelStyle = "flex items-center gap-1 gap-mob-6 sm:gap-tab-6 lg:gap-web-6 cursor-pointer";
   const radioStyle = "block h-mob-13 w-mob-13 sm:h-tab-13 sm:w-tab-13 lg:h-web-13 lg:w-web-13";

   return <div className={elementStyle}>
      <ul className={listStyle}>
         <li className={listItemStyle}>
            <label htmlFor="same-as-delivery" className={listLabelStyle}>
               <input
                  type="radio"
                  name="same-as-delivery"
                  id="same-as-delivery"
                  className={radioStyle}
                  checked={isSameAsDelivery}
                  onChange={() => {
                     setIsSameAsDelivery(!isSameAsDelivery)
                     setIsSpecifyLocation(false)
                  }}
               />
               <span>Same as Delivery</span>
            </label>
         </li>
         <li className={listItemStyle}>
            <label htmlFor="specify-location" className={listLabelStyle}>
               <input
                  type="radio"
                  name="specify-location"
                  id="specify-location"
                  className={radioStyle}
                  checked={isSpecifyLocation}
                  onChange={() => {
                     setIsSameAsDelivery(false)
                     setIsSpecifyLocation(!isSpecifyLocation)
                  }}
               />
               <span>Specify Location</span>
            </label>
         </li>
      </ul>
   </div>;
}