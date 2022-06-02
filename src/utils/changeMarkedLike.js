export const getLikedData = () => {
    return localStorage.getItem('markedElements') ? JSON.parse(localStorage.getItem('markedElements')) : [];
}

export const changeLikedData = ( idBtn, setAddView, addView, setAddLike, addLike, mediaElement, markedElements, setMarkedElements ) => {
    if( idBtn === 'btn-view') {
        addView = !addView;
        setAddView(addView);
    } else if( idBtn === 'btn-like') {
        addLike = !addLike;
        setAddLike(addLike);
    }

    let findIndex = markedElements.findIndex(({id}) => id === mediaElement.id );

    if( !addLike && findIndex !== -1 ) {
        markedElements = markedElements.filter(({id}) => id !== mediaElement.id);
    } else if( findIndex !== -1 ) {
        markedElements[findIndex].liked = addLike;
        markedElements[findIndex].viewed = addView;
    } else {
        mediaElement.viewed = addView;
        mediaElement.liked = addLike;
        markedElements.push(mediaElement)
    }

    localStorage.setItem('markedElements', JSON.stringify(markedElements))
    setMarkedElements([...markedElements])
}