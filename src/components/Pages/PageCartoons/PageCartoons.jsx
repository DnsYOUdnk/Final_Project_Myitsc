import { PageMedia } from "../GetPagesMedia/GetPageMedia";

export const PageCartoons = () => {
    const requestName = '';
    const pageName = 'Cartoons';
    const requestKey = '';
    const url = 'https://ghibliapi.herokuapp.com/films/';
    return (
        < PageMedia requestName={requestName} pageName={pageName} requestKey={requestKey} url={url}/>
    )
}