import { PageMedia } from "../GetPagesMedia/GetPageMedia"

export const PageSerials = () => {
    const requestName = 'MostPopularTVs';
    const pageName = 'Serials';
    const requestKey = 'k_rwppms7u';
    
    return (
        < PageMedia requestName={requestName} pageName={pageName} requestKey={requestKey}/>
    )
}