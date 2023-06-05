const AddressCard = () => {
    return (
        <div className="flex gap-3 p-2 border rounded-sm text-sm">
            <div>
                <input type="radio" />
            </div>
            <div className="flex flex-col gap-4">
                <div className="text-base font-semibold">Rahul Sarkar</div>
                <div className="txt-primary font-semibold">vijay logde, mohan traders, ward no.16, tilda-neora, chhttisgarh - 493114</div>
                <div className="">Mobile: <span className="font-semibold">9893343676</span></div>
                <div className="txt-primary font-semibold">Cash On Delivery Availble</div>
                <div className="flex items-center gap-3">
                    <button className="border text-sm py-1 px-2 bg-red-500 font-semibold text-white">Remove</button>
                    <button className="border text-sm py-1 px-2 btn-initial font-semibold">Edit</button>
                </div>
            </div>
        </div>

    )
}
export default AddressCard