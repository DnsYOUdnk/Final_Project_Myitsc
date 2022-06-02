import './home_page.css';
import { SectionBestProducts } from './SectionBestProducts';
import { SectionChoiceMedia1 }  from './SectionChoiceMedia';
import { SectionOpportunities } from './SectionOpportunities';
import { SectionPromo } from "./SectionPromo";

export const Home = () => {
    return (
        <>
            < SectionPromo />
            < SectionOpportunities />
            < SectionChoiceMedia1 />
            < SectionBestProducts />
        </>
    )
}