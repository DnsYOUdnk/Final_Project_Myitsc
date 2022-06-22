import { useState } from "react"

export const ImageElementMedia = ({ image, title }) => {
    const [imageZoomMode, setImageZoomMode] = useState(false);
    const getPopUpImage = () => {
        setImageZoomMode(!imageZoomMode)
    }

    return (
        <div className="page__media__content__pic" onClick={() => getPopUpImage()}>
            <img src={image} alt={title} />
        </div>
    )
}