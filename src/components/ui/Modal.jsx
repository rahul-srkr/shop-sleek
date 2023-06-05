const Modal = (props) => {
    return (
        <div
            className="fixed top-0 left-0 h-screen w-full bg-[rgb(0,0,0,0.5)] flex justify-center items-center z-[70] !m-0"
            onDragStart={(e) => {
                e.preventDefault()
                e.stopPropagation()
            }}
            onClick={() => {
                props.onClose ? props.onClose() : ""
            }}
        >
            <div
                className="bg-white rounded-md p-5 max-h-[100vh] overflow-y-auto sm:p-2"
                onClick={(e) => e.stopPropagation()}
            >
                {props.children}
            </div>
        </div>
    )
}
export default Modal