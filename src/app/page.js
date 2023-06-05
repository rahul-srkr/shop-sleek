import Hero from "@/components/layout/Hero"
import TopDeals from "@/components/events/TopDeals";
import TopBrands from "@/components/events/TopBrands";
import WearCategories from "@/components/events/WearCategories";
import Trending from "@/components/events/Trending";

export default function Home() {

  return (
    <>
      <Hero />
      <TopDeals />
      <TopBrands />
      <WearCategories />
      <Trending />
    </>
  )
}
