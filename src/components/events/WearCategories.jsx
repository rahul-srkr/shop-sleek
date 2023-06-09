import WearCard from "../cards/WearCard"
import wear1 from "../../../public/assets/wear-categories/active.jpeg"
import wear2 from "../../../public/assets/wear-categories/casual.jpeg"
import wear3 from "../../../public/assets/wear-categories/Ethnic.jpeg"
import wear4 from "../../../public/assets/wear-categories/kids.jpeg"
import wear5 from "../../../public/assets/wear-categories/longe.jpeg"
import wear6 from "../../../public/assets/wear-categories/sleep.jpeg"
import wear7 from "../../../public/assets/wear-categories/sports.jpeg"
import wear8 from "../../../public/assets/wear-categories/western.jpeg"
import wear9 from "../../../public/assets/wear-categories/work.jpeg"
import Carousel from "../ui/Carousel"

const WearCategories = () => {

    return (
        <Carousel text={"Top Categaries"}>
            <WearCard wear={wear1} name={"Active Wear"} discount={50} />
            <WearCard wear={wear2} name={"Casual Wear"} discount={75} />
            <WearCard wear={wear3} name={"Ethnic Wear"} discount={23} />
            <WearCard wear={wear4} name={"Kids Wear"} discount={87} />
            <WearCard wear={wear5} name={"Longe Wear"} discount={25} />
            <WearCard wear={wear6} name={"Sleep Wear"} discount={43} />
            <WearCard wear={wear7} name={"Sports Wear"} discount={59} />
            <WearCard wear={wear8} name={"Western Wear"} discount={65} />
            <WearCard wear={wear9} name={"Work Wear"} discount={60} />
        </Carousel>
    )
}
export default WearCategories