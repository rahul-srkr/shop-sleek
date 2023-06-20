import DealCard from "../cards/DealCard"
import img1 from "../../../public/assets/top-deals/pexels-arianna-jadé-2896840.jpg"
import img2 from "../../../public/assets/top-deals/pexels-athena-2043590.jpg"
import img3 from "../../../public/assets/top-deals/pexels-cottonbro-studio-4937224.jpg"
import img4 from "../../../public/assets/top-deals/pexels-evg-kowalievska-1381556.jpg"
import img5 from "../../../public/assets/top-deals/pexels-harsh-kushwaha-1721558.jpg"
import img6 from "../../../public/assets/top-deals/pexels-mikotoraw-photographer-4132651.jpg"
import img7 from "../../../public/assets/top-deals/pexels-murat-esibatir-4355702.jpg"
import img8 from "../../../public/assets/top-deals/pexels-nicolas-postiglioni-852860.jpg"
import img9 from "../../../public/assets/top-deals/pexels-ricardo-acevedo-1375736.jpg"
import brand1 from "../../../public/assets/top-deals/brand/2_big1.png"
import brand2 from "../../../public/assets/top-deals/brand/dsfsda.jpg"
import brand3 from "../../../public/assets/top-deals/brand/79.png"
import brand4 from "../../../public/assets/top-deals/brand/95.png"
import brand5 from "../../../public/assets/top-deals/brand/6123ced7720f29323f0110c3_2.jpg"
import brand6 from "../../../public/assets/top-deals/brand/attachment_81641127.png"
import brand7 from "../../../public/assets/top-deals/brand/attachment_89509990.png"
import brand8 from "../../../public/assets/top-deals/brand/wrwqerwre.jpg"
import Carousel from "../ui/Carousel"

const TopDeals = () => {
    return (
        <Carousel text={"Top Deals"}>
            <DealCard img={img1} brand={brand1} />
            <DealCard img={img2} brand={brand2} />
            <DealCard img={img3} brand={brand3} />
            <DealCard img={img4} brand={brand4} />
            <DealCard img={img5} brand={brand5} />
            <DealCard img={img6} brand={brand6} />
            <DealCard img={img7} brand={brand7} />
            <DealCard img={img8} brand={brand8} />
            <DealCard img={img9} brand={brand1} />
        </Carousel>
    )
}
export default TopDeals