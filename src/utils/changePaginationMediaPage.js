export const getQuantityPages = () => {
    return localStorage.getItem('markedElements') ? JSON.parse(localStorage.getItem('markedElements')) : [];
}

export const getReceivedMediaData = ( allMediaData, locationPage, setMediaData, indexPage ) => {
    let pageNumber = locationPage ? +locationPage.split('=')[1] : 1;
    let pageData = {data: allMediaData.slice((pageNumber-1)*indexPage, pageNumber*indexPage), currentPage: pageNumber};
    setMediaData(pageData);
}