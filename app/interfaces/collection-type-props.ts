import { Dispatch, SetStateAction } from "react";

export interface CollectionTypeProps {
    isSameAsDelivery: boolean;
    setIsSameAsDelivery: Dispatch<SetStateAction<boolean>>;
    isSpecifyLocation: boolean;
    setIsSpecifyLocation: Dispatch<SetStateAction<boolean>>;
}