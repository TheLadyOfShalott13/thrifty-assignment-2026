import Image from "next/image";

export default function HeroBanner() {
   return (
      <div className="absolute inset-0 w-full before:absolute before:inset-0 before:z-[1] before:bg-black/50">
         <Image
            src={`images/home-page-banner.jpg`}
            alt="Thrifty UAE"
            fill
            className="object-cover object-center"
            priority
         />
      </div>
   );
}