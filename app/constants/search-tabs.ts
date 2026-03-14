export const SEARCH_TABS = [
   { id: 'daily', label: 'Start Booking' },
   { id: 'monthly', label: 'Monthly Specials' },
] as const;

export type SearchTabs = (typeof SEARCH_TABS)[number]["id"];