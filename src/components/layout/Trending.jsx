import Heading from "../Heading"
import ProductCard from "../cards/ProductCard"
import kurta from "../../../public/assets/product/kurta.jpg"
import sport from "../../../public/assets/wear-categories/sports.webp"
import western from "../../../public/assets/wear-categories/western.jpeg"
import Products from "../Products"

const Trending = () => {
    return (
        <div className="mt-8">
            <Heading text={"Trending"} classname="mb-6 text-center !text-4xl" />
            <div className="w-full  bg-card-light dark:bg-card-dark select-none p-3 md:p-2">
                <Products text={"Kurta's"}>
                    <ProductCard
                        img={kurta}
                        name={"Kurta with Palazzos"}
                        price={3000}
                        discount={5000}
                        percent={70}
                        star={4.5}
                        review={14}
                    />
                    <ProductCard
                        img={kurta}
                        name={"Kurta with Palazzos"}
                        price={3000}
                        discount={5000}
                        percent={70}
                        star={4.5}
                        review={14}
                    />
                    <ProductCard
                        img={kurta}
                        name={"Kurta with Palazzos"}
                        price={3000}
                        discount={5000}
                        percent={70}
                        star={4.5}
                        review={14}
                    />
                    <ProductCard
                        img={kurta}
                        name={"Kurta with Palazzos"}
                        price={3000}
                        discount={5000}
                        percent={70}
                        star={4.5}
                        review={14}
                    />
                    <ProductCard
                        img={kurta}
                        name={"Kurta with Palazzos"}
                        price={3000}
                        discount={5000}
                        percent={70}
                        star={4.5}
                        review={14}
                    />
                </Products>

                <Products text={"Sports"}>
                    <ProductCard
                        img={sport}
                        name={"Track pants with Tshirt"}
                        price={3000}
                        discount={5000}
                        percent={70}
                        star={4.5}
                        review={14}
                    />
                    <ProductCard
                        img={sport}
                        name={"Track pants with Tshirt"}
                        price={3000}
                        discount={5000}
                        percent={70}
                        star={4.5}
                        review={14}
                    />
                    <ProductCard
                        img={sport}
                        name={"Track pants with Tshirt"}
                        price={3000}
                        discount={5000}
                        percent={70}
                        star={4.5}
                        review={14}
                    />
                    <ProductCard
                        img={sport}
                        name={"Track pants with Tshirt"}
                        price={3000}
                        discount={5000}
                        percent={70}
                        star={4.5}
                        review={14}
                    />
                    <ProductCard
                        img={sport}
                        name={"Track pants with Tshirt"}
                        price={3000}
                        discount={5000}
                        percent={70}
                        star={4.5}
                        review={14}
                    />
                </Products>

                <Products text={"Western"}>
                    <ProductCard
                        img={western}
                        name={"Track pants with Tshirt"}
                        price={3000}
                        discount={5000}
                        percent={70}
                        star={4.5}
                        review={14}
                    />
                </Products>
            </div>
        </div>
    )
}
export default Trending