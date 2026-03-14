"use client";

import { useState } from "react";
import TimePicker from "react-time-picker";

export default function TimePickerComponent() {
   const [value, setValue] = useState<string>("08:00");

   const handleChange = (val: string | null) => {
      const safeValue = val ?? "00:00";
      setValue(safeValue);
   };

   return (
      <>
         <TimePicker
            value={ value }
            onChange={ handleChange }
            disableClock
            clearIcon={ null }
         />
      </>
   );
}