import React from "react";
import { CollectionTypeProps } from "@/app/interfaces/collection-type-props";
import {listItemStyle, listLabelStyle, listStyle, singleColStyle, radioInputStyle} from "@/app/styles/form-styles";

export function CollectionTypePicker({
   isSameAsDelivery,
   setIsSameAsDelivery,
   isSpecifyLocation,
   setIsSpecifyLocation,
}: CollectionTypeProps) {
   return <div className={singleColStyle}>
      <ul className={listStyle}>
         <li className={listItemStyle}>
            <label htmlFor="same-as-delivery" className={listLabelStyle}>
               <input
                  type="radio"
                  name="same-as-delivery"
                  id="same-as-delivery"
                  className={radioInputStyle}
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
                  className={radioInputStyle}
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