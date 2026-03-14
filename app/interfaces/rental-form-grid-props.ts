import { SEARCH_TABS } from "@/app/constants/search-tabs";

export type SearchTabs = (typeof SEARCH_TABS)[number]["id"];

export interface RentalFormGridProps {
    tab: SearchTabs;
}