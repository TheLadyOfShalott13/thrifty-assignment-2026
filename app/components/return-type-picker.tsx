import React, { useState } from "react";
import { RentalReturnTypeProps } from "@/app/interfaces/rental-return-type-props";
import {listItemStyle, listLabelStyle, listStyle, radioInputStyle} from "@/app/styles/form-styles";

export function ReturnTypePicker({
   setIsSpecifyLocation,
   setIsSameAsDelivery,
   isDropOff = false,
   setIsDropOff
}:RentalReturnTypeProps) {
   const [isCollection, setIsCollection] = useState<boolean>(true);

   return <ul className={listStyle}>
      <li className={listItemStyle}>
         <label htmlFor="drop-off" className={listLabelStyle}>
            <input
               type="radio"
               name="drop-off"
               id="drop-off"
               checked={isDropOff}
               className={radioInputStyle}
               onChange={() => {
                  setIsDropOff(!isDropOff)
                  setIsCollection(false)
                  setIsSameAsDelivery(false)
                  setIsSpecifyLocation(false)
               }}
            />
            <span>Drop off</span>
         </label>
      </li>
      <li className={listItemStyle}>
         <label htmlFor="collection" className={listLabelStyle}>
            <input
               type="radio"
               name="collection"
               id="collection"
               checked={isCollection}
               className={radioInputStyle}
               onChange={() => {
                  setIsCollection(!isCollection)
                  setIsDropOff(false)
                  setIsSameAsDelivery(false)
                  setIsSpecifyLocation(false)
               }}
            />
            <span>Collection</span>
         </label>
      </li>
   </ul>;
}