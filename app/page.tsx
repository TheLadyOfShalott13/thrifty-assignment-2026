import RentalSearchHero from "@/app/components/rental-search-hero";

export default function Home() {
   return (
      <main>
         <RentalSearchHero />
         <section className="py-20 px-4 text-center">
            <h2 className="text-3xl font-bold">Why Choose Thrifty?</h2>
            <p className="mt-4 text-gray-600">Discover our wide range of vehicles across the UAE.</p>
         </section>
      </main>
   );
}