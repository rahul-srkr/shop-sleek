import ProductCard from "../cards/ProductCard"
import kurta from "../../../public/assets/product/kurta.jpg"
import sport from "../../../public/assets/wear-categories/sports.webp"

const Trending = () => {
    return (
        <div className="mt-8">
            <h2 className={`text-4xl font-bold sm:text-xl mb-6 text-center`}>Trending</h2>
            <div className="w-full  bgc-primary select-none p-3 md:p-2">
                <div>
                    <h2 className={`text-3xl font-bold sm:text-xl my-6`}>Kurtas</h2>
                    <div className="grid grid-cols-5 gap-6 xs:grid-cols-1 lg:gap-2 lg:grid-cols-2 2xl:gap-4 2xl:grid-cols-3 4xl:grid-cols-4 ">
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
                    </div>
                </div>

                <div>
                    <h2 className={`text-3xl font-bold sm:text-xl my-6`}>Sports</h2>
                    <div className="grid grid-cols-5 gap-6 xs:grid-cols-1 lg:gap-2 lg:grid-cols-2 2xl:gap-4 2xl:grid-cols-3 4xl:grid-cols-4 ">
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
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Trending