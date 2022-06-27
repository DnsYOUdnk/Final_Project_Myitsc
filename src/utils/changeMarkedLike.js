import { message } from 'antd';
import { EyeTwoTone, HeartTwoTone, EyeInvisibleTwoTone, DislikeTwoTone } from '@ant-design/icons';

export const getLikedData = () => {
    return localStorage.getItem('markedElements') ? JSON.parse(localStorage.getItem('markedElements')) : [];
}

export const changeLikedData = ( idBtn, setAddView, addView, setAddLike, addLike, contentData, markedElements, setMarkedElements ) => {

    let newValueBtn = null;

    if( idBtn === 'btn-view' ) {
        addView = !addView;
        newValueBtn = !addView;
        setAddView(addView);
    } else if( idBtn === 'btn-like' ) {
        addLike = !addLike;
        newValueBtn = !addLike;
        setAddLike(addLike);
    }

    let findIndex = markedElements.findIndex(({id}) => id === contentData.id );

    if( !addLike && !addView && findIndex !== -1 ) {
        markedElements = markedElements.filter(({id}) => id !== contentData.id);
    } else if( findIndex !== -1 ) {
        markedElements[findIndex].liked = addLike;
        markedElements[findIndex].viewed = addView;
    } else {
        contentData.viewed = addView;
        contentData.liked = addLike;
        markedElements.push(contentData)
    }

    localStorage.setItem('markedElements', JSON.stringify(markedElements))
    setMarkedElements([...markedElements])

//Alert Message
    const properties = {
        content: `«${contentData.title}»`,
        className: 'custom-class',
        duration: 2,
        style: {
            marginTop: '2px',
        }
    }

    if(!newValueBtn) {
        properties.icon = idBtn === 'btn-like' ? <HeartTwoTone twoToneColor="#eb2f96" /> : <EyeTwoTone/>;
        properties.content += idBtn === 'btn-like' ? ' added to the liked list' : ' is marked by you as viewed';
        message.success(properties);
    } else {
        properties.icon = idBtn === 'btn-like' ? <DislikeTwoTone /> : <EyeInvisibleTwoTone/>;
        properties.content += idBtn === 'btn-like' ? ' removed from the liked list' : ' removed from viewed';
        message.error(properties);
    }


}