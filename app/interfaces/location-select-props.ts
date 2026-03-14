import { EMIRATES } from "@/app/constants/emirates";

export type PossibleEmirateValues = (typeof EMIRATES)[number]["value"];

export interface LocationSelectProps {
    emirate: PossibleEmirateValues | "";
    name?: string;
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
}