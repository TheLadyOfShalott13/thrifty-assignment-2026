"use client";

import React, { useState } from 'react';
import Image from "next/image";
import RentalFormGrid from "@/app/components/rental-form-grid";
import { SEARCH_TABS, SearchTabs } from "@/app/constants/search-tabs";
import DeliveryForm from "@/app/components/rental-delivery/delivery-form";
import HeroBanner from "@/app/components/hero-banner";
import HomepageMarquee from "@/app/components/homepage-marquee";


const RentalSearchHero = () => {
   const [activeTab, setActiveTab] = useState<SearchTabs>('daily');
   const [isShowDeliveryForm, setIsShowDeliveryForm] = useState<boolean>(false);

   return (
      <section className="relative min-h-[100dvh] pb-10 pt-12 sm:min-h-[60dvh] lg:min-h-[80dvh] lg:pb-[7.72vw] lg:pt-[6.72vw]">
         <HomepageMarquee />
         <HeroBanner />

         <div className="relative z-[2] mx-auto mb-8 w-full max-w-[93vw] lg:max-w-[75vw]">
            <h1 className="hidden text-center text-2xl font-semibold capitalize text-white sm:block lg:text-3xl">
               Free Delivery & Collection on all Monthly Car Rentals - <br className="lg:hidden" />
               Available 24/7, <span className="text-xl">T&Cs APPLY.</span>
            </h1>
         </div>

         <div className="relative z-[2] mx-auto w-full max-w-[93vw] bg-[#d9dee6] sm:max-w-[90vw] lg:max-w-[61vw] lg:bg-white/80">
            <div className="flex w-full bg-[#12315C]">
               {
                  SEARCH_TABS.map((tab) => (
                     <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 py-5 text-sm font-semibold uppercase transition-colors sm:text-lg 
                           ${activeTab === tab.id ? 'bg-white text-black' : 'text-white hover:bg-blue-900'} 
                           border-r border-white/30 last:border-r-0`}
                     >
                        {tab.label}
                     </button>
                  ))
               }
            </div>


            <div className="p-5 sm:p-8 lg:p-6">
               <form>
                  {
                     (isShowDeliveryForm) ?
                        <DeliveryForm tab={activeTab} /> :
                        <>
                           <RentalFormGrid tab={activeTab}/>
                           <hr className="my-4 border-t border-gray-300"/>
                           <div className="flex items-center justify-between mt-4">
                              <button
                                 onClick={() => setIsShowDeliveryForm(!isShowDeliveryForm)}
                                 className="flex items-center pt-4 gap-mob-5 text-mob-16 font-semibold leading-[140%] underline sm:gap-tab-5 sm:text-tab-16 lg:gap-web-6 lg:text-web-16 text-black"
                              >
                                 <span className="inline-block h-[20px] w-[20px]">
                                    <Image
                                       src={`./public/icons/deliver-to-me-car.svg`}
                                       alt="Deliver to me"
                                       width={20}
                                       height={20}
                                       className="object-contain"
                                    />
                                 </span>
                                 Deliver to me
                              </button>

                              <button type="submit"
                                 className="ml-auto inline-flex items-center justify-center bg-blue-900 text-white text-sm sm:text-base lg:text-lg leading-none font-semibold uppercase border border-blue-900 hover:bg-black px-5 py-3 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50"
                              >
                                 Search
                              </button>
                           </div>
                        </>
                  }
               </form>
            </div>
         </div>
      </section>
   );
};

export default RentalSearchHero;