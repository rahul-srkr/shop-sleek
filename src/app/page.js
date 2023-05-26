'use client'

import Slider from "@/components/layout/Hero"
import TopDeals from "@/components/events/TopDeals";
import TopBrands from "@/components/events/TopBrands";
import WearCategories from "@/components/events/WearCategories";
import Product from "@/components/events/Trending";

export default function Home() {

  return (
    <main>
      <Slider />
      <TopDeals />
      <TopBrands />
      <WearCategories />
      <Product />
    </main>
  )
}
