export function getDatePlusDays(days: number = 0): string {
   const date = new Date();
   date.setDate(date.getDate() + days);
   return date.toISOString().split("T")[0];
}