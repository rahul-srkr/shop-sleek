const Heading = ({ text, classname = "" }) => {
    return (
        <h2 className={`text-3xl font-bold txt sm:text-xl ${classname}`}>{text}</h2>
    )
}
export default Heading