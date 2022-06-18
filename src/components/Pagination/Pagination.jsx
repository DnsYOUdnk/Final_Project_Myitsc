import { SignInIcon, TriangleLeftIcon, TriangleRightIcon } from '@primer/octicons-react';
import { useNavigate } from 'react-router-dom'
import './pagination.css'

export const Pagination = ({ currentPage, quantityPages }) => {
    const navigate = useNavigate();
    let currentValuePage = currentPage;
    const changeNavPage = (step) => {
        switch(step) {
            case 'first': currentValuePage = 1;
            break;
            case 'prev': currentValuePage = currentValuePage > 1 ? --currentValuePage : 1;
            break;
            case 'next': currentValuePage = currentValuePage < quantityPages ? ++currentValuePage : quantityPages;
            break;
            case 'last': currentValuePage = quantityPages;
            break;
            default: break;
        }
        
        if(currentValuePage === 1) {
            navigate('./')
        } else {
            navigate('?page=' + currentValuePage)
        }
    }

    return (
        <div className="pagination">
            <div className="pagination__btn btn_first" title='first page' onClick={() => changeNavPage('first')}>< SignInIcon size={32} /></div>
            <div className="pagination__btn btn_prev" title='previous page' onClick={() => changeNavPage('prev')}>< TriangleLeftIcon size={48} /></div>
            <div className="pagination__current" title='current page'>{ currentValuePage }</div>
            <div className="pagination__btn btn_next" title='next page' onClick={() => changeNavPage('next')}>< TriangleRightIcon size={48} /></div>
            <div className="pagination__btn btn_last" title='last page' onClick={() => changeNavPage('last')}>< SignInIcon size={32} /></div>
        </div>
    )
}