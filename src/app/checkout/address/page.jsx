import AddressCard from "@/components/cards/AddressCard"

const page = () => {
    return (
        <div className="flex flex-col gap-3">
            <AddressCard />
            <AddressCard />
            <AddressCard />
            <div className="px-3 py-2 border font-semibold">+Add New</div>
        </div>
    )
}
export default page