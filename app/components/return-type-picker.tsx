import React, { useState } from "react";
import { RentalReturnTypeProps } from "@/app/interfaces/rental-return-type-props";

export function ReturnTypePicker({
   setIsSpecifyLocation,
   setIsSameAsDelivery,
   isDropOff = false,
   setIsDropOff
}:RentalReturnTypeProps) {
   /* styles */
   const listStyle = "col-span-full flex gap-4 gap-mob-10 sm:gap-tab-13 lg:gap-web-13";
   const listItemStyle = "flex items-center gap-1 gap-mob-6 sm:gap-tab-6 lg:gap-web-6";
   const listLabelStyle = "flex items-center gap-1 gap-mob-6 sm:gap-tab-6 lg:gap-web-6 cursor-pointer";
   const radioStyle = "block h-mob-13 w-mob-13 sm:h-tab-13 sm:w-tab-13 lg:h-web-13 lg:w-web-13";

   /* state management */
   const [isCollection, setIsCollection] = useState<boolean>(true);


   return <ul className={listStyle}>
      <li className={listItemStyle}>
         <label htmlFor="drop-off" className={listLabelStyle}>
            <input
               type="radio"
               name="drop-off"
               id="drop-off"
               checked={isDropOff}
               className={radioStyle}
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
               className={radioStyle}
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