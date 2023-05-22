'use client'

import Image from "next/image";
import Slider from "@/components/layout/Slider"
import DealCard from "@/components/cards/DealCard";
import TopDeals from "@/components/layout/TopDeals";
import TopBrands from "@/components/layout/TopBrands";
import WearCategories from "@/components/layout/WearCategories";
import banner from "../../public/assets/banner/banner2.jpg"
import Product from "@/components/layout/Trending";

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
