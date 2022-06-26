import './alert_message.css'

export const AlertMessage = ({ messageData, title }) => {
    const { view, tag } = messageData;

    const alertData = {
        addLike: 'added to the liked list',
        removeLike: 'removed from the liked list',
        addView: 'is marked by you as viewed',
        removeView: 'removed from viewed'
    }

    let message = `«${title}» `;

    if(tag === 'like') {
        message += !view ? alertData.addLike : alertData.removeLike;
    } else {
        message += !view ? alertData.addView : alertData.removeView;
    }

    return (
        <li className={!view ? "alert__message" : "alert__message disabled"} >
            <div className="alert__text">
                {message}
            </div>
        </li>
    )
}