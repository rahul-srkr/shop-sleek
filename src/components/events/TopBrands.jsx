import BrandCard from "../cards/BrandCard"
import brand1 from "../../../public/assets/top-brands/1-5.jpg"
import brand2 from "../../../public/assets/top-brands/2-8.jpg"
import brand3 from "../../../public/assets/top-brands/3-6.jpg"
import brand4 from "../../../public/assets/top-brands/4-5.jpg"
import brand5 from "../../../public/assets/top-brands/5-5.jpg"
import brand6 from "../../../public/assets/top-brands/6-4.jpg"
import brand7 from "../../../public/assets/top-brands/7-4.jpg"
import brand8 from "../../../public/assets/top-brands/8-4.jpg"
import brand9 from "../../../public/assets/top-brands/9-3.jpg"
import brand10 from "../../../public/assets/top-brands/10-3.jpg"
import brand11 from "../../../public/assets/top-brands/11-1.jpg"
import brand12 from "../../../public/assets/top-brands/12-1.jpg"
import brand13 from "../../../public/assets/top-brands/13-1.jpg"
import brand14 from "../../../public/assets/top-brands/14-1.jpg"
import brand15 from "../../../public/assets/top-brands/15-1.jpg"
import brand16 from "../../../public/assets/top-brands/16-min-3.jpg"
import brand17 from "../../../public/assets/top-brands/17-min-4.jpg"
import brand18 from "../../../public/assets/top-brands/18-min-3.jpg"
import brand19 from "../../../public/assets/top-brands/19-min-3.jpg"
import brand20 from "../../../public/assets/top-brands/20-min-4.jpg"
import brand21 from "../../../public/assets/top-brands/79.png"
import brand22 from "../../../public/assets/top-brands/1-5.jpg"
import Carousel from "../ui/Carousel"

const TopBrands = () => {
    return (
        <Carousel text={"Top Brands"}>
            <BrandCard brand={brand1} />
            <BrandCard brand={brand2} />
            <BrandCard brand={brand3} />
            <BrandCard brand={brand4} />
            <BrandCard brand={brand5} />
            <BrandCard brand={brand6} />
            <BrandCard brand={brand7} />
            <BrandCard brand={brand8} />
            <BrandCard brand={brand9} />
            <BrandCard brand={brand10} />
            <BrandCard brand={brand11} />
            <BrandCard brand={brand12} />
            <BrandCard brand={brand13} />
            <BrandCard brand={brand14} />
            <BrandCard brand={brand15} />
            <BrandCard brand={brand16} />
            <BrandCard brand={brand17} />
            <BrandCard brand={brand18} />
            <BrandCard brand={brand19} />
            <BrandCard brand={brand20} />
            <BrandCard brand={brand21} />
            <BrandCard brand={brand22} />
        </Carousel>
    )
}
export default TopBrands