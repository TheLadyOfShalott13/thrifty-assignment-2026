export const EMIRATES = [
   { label: "Abu Dhabi", value: "abu-dhabi" },
   { label: "Dubai", value: "dubai" },
   { label: "Sharjah", value: "sharjah" },
   { label: "Ajman", value: "ajman" },
   { label: "Umm Al Quwain", value: "umm-al-quwain" },
   { label: "Ras Al Khaimah", value: "ras-al-khaimah" },
   { label: "Fujairah", value: "fujairah" },
] as const;

export type PossibleEmirateValues = (typeof EMIRATES)[number]["value"];