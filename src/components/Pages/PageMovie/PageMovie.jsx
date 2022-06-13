import { PageMedia } from "../GetPagesMedia/GetPageMedia"

export const PageMovie = () => {
    const requestName = 'MostPopularMovies';
    const pageName = 'Movies';
    const requestKey = 'k_50u66ezw';
    
    return (
        < PageMedia requestName={requestName} pageName={pageName} requestKey={requestKey}/>
    )
}