"use client"
import { Rating } from "@mui/material"

const StarRating = () => {
    return (
        <>
            <Rating
                value={4.5}
                readOnly
                precision={0.5}
                size={"medium"}
                style={{ color: "#ff0066" }}
            />
        </>
    )
}
export default StarRating