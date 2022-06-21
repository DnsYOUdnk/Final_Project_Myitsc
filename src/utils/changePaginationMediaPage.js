export const getReceivedMediaData = ( allMediaData, locationPage, setMediaData, indexPage ) => {
    const quantityPages = Math.ceil(allMediaData.length/indexPage);
    const perPages = locationPage.split('=')[1];
    const pageNumber = !perPages ? 1 : +perPages > quantityPages ? quantityPages : perPages;

    const pageData = {
        data: allMediaData.slice((pageNumber-1)*indexPage,
        pageNumber*indexPage), currentPage: +pageNumber,
        totalPages: quantityPages
    };
    setMediaData(pageData);
}