import CartProductCard from "@/components/cards/CartProductCard"

const page = () => {
    return (
        <div className="mx-auto max-w-[65rem] 5xl:mx-2">
            <div className="flex gap-4 2xl:flex-col">
                <div className="w-[70%] space-y-4 2xl:w-full">
                    <CartProductCard />
                    <CartProductCard />
                    <CartProductCard />
                    <CartProductCard />
                </div>
                <div className="w-[30%] space-y-3 border p-3 min-w-[15rem] 2xl:w-full">
                    <h2 className="text-sm font-semibold">Price Details (3 items)</h2>
                    <div className="txt-primary space-y-2">
                        <div className="flex items-center justify-between">
                            <div>Total MRP</div>
                            <div>₹1000</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>Discount on MRP</div>
                            <div>₹400</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>Delivery Charge</div>
                            <div>₹100</div>
                        </div>
                    </div>
                    <hr className="h-1 w-full" />
                    <div className="flex items-center justify-between font-bold">
                        <div>Total Amount</div>
                        <div>₹700</div>
                    </div>
                    <button className="w-full p-2 btn-secondary text-white">PLACE ORDER</button>
                </div>
            </div>
        </div>
    )
}
export default page