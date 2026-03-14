export const LOCATIONS = {
   "abu-dhabi": [
      { label: "Abu Dhabi City", value: "abu-dhabi-city" },
      { label: "Al Ain", value: "al-ain" },
      { label: "Mussafah", value: "mussafah" },
      { label: "Yas Island", value: "yas-island" },
      { label: "Saadiyat Island", value: "saadiyat-island" },
      { label: "Khalifa City", value: "khalifa-city" },
   ],

   dubai: [
      { label: "Deira", value: "deira" },
      { label: "Bur Dubai", value: "bur-dubai" },
      { label: "Jumeirah", value: "jumeirah" },
      { label: "Dubai Marina", value: "dubai-marina" },
      { label: "JLT", value: "jlt" },
      { label: "Business Bay", value: "business-bay" },
      { label: "Al Barsha", value: "al-barsha" },
   ],

   sharjah: [
      { label: "Sharjah City", value: "sharjah-city" },
      { label: "Al Nahda", value: "al-nahda" },
      { label: "Al Majaz", value: "al-majaz" },
      { label: "Muweileh", value: "muweileh" },
   ],

   ajman: [
      { label: "Ajman City", value: "ajman-city" },
      { label: "Al Jurf", value: "al-jurf" },
      { label: "Masfout", value: "masfout" },
   ],

   "umm-al-quwain": [
      { label: "Umm Al Quwain City", value: "uaq-city" },
      { label: "Falaj Al Mualla", value: "falaj-al-mualla" },
   ],

   "ras-al-khaimah": [
      { label: "RAK City", value: "rak-city" },
      { label: "Al Hamra", value: "al-hamra" },
      { label: "Al Marjan Island", value: "al-marjan-island" },
   ],

   fujairah: [
      { label: "Fujairah City", value: "fujairah-city" },
      { label: "Dibba", value: "dibba" },
      { label: "Masafi", value: "masafi" },
   ],
} as const;


export type PossibleLocationValues = (typeof LOCATIONS)[keyof typeof LOCATIONS][number]["value"];
