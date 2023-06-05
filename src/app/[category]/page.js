import ProductsByCategory from "@/components/products/ProductsByCategory"

const Page = () => {

    return (
        <>
            <div className='mb-8 md:hidden  px-2'>
                <div className='text-sm mb-2 txt-primary'>Home/Kurtis For Women</div>
                <div className='flex items-center gap-1 text-sm '>
                    <h1 className='font-semibold'>Kurtis For Women</h1>
                    <span>-</span>
                    <span>36855 items</span>
                </div>
            </div>
            <ProductsByCategory />
        </>
    )
}
export default Page