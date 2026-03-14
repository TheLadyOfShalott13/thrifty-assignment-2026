import React, { useEffect, useState } from "react";

export default function HomepageMarquee() {
   const marquee_messages = [
      "Please be advised that our 24/7 delivery and collection team and our Thrifty City Counters are now open across Dubai & Northern Emirates... Toll Free 800 4770. Stay Safe!",
      "New Location Alert! We are pleased to announce we are back at Mercato Shopping Mall! Book Now.",
      "Fantastic Savings & 24/7 Pick up from our Abu Dhabi, Dubai and Sharjah Airport Counters. Book now."
   ];

   const [index, setIndex] = useState(0);

   // Rotate messages every time the animation finishes
   useEffect(() => {
      const interval = setInterval(() => {
         setIndex((prev) => (prev + 1) % marquee_messages.length);
      }, 25000);

      return () => clearInterval(interval);
   }, [marquee_messages.length]);

   return <>
      <div className="absolute top-0 z-[5] w-full overflow-hidden bg-[#235fb5] text-white">
         <div className="relative flex min-h-[30px] items-center py-2">
            <div className="animate-marquee whitespace-nowrap text-xs lg:text-sm ">
               {
                  <span key={index}>
                     {marquee_messages[index]}
                  </span>
               }
            </div>
         </div>
      </div>
      <style jsx>{`
              @keyframes marquee {
          0% { transform: translateX(100vw); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: block;
          animation: marquee 25s linear infinite;
        }
      `}
      </style>
   </>
}