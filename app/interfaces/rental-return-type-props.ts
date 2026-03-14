import { Dispatch, SetStateAction } from "react";

export interface RentalReturnTypeProps {
    setIsSameAsDelivery: Dispatch<SetStateAction<boolean>>;
    setIsSpecifyLocation: Dispatch<SetStateAction<boolean>>;
    isDropOff: boolean;
    setIsDropOff: Dispatch<SetStateAction<boolean>>;
}