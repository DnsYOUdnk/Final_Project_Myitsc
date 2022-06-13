import { SignInIcon, TriangleLeftIcon, TriangleRightIcon } from '@primer/octicons-react';
import { useNavigate } from 'react-router-dom'
import './pagination.css'

export const Pagination = ({ location, quantityPages }) => {
    const navigate = useNavigate();

    let pageNumber = location.search ? +location.search.split('=')[1] : 1;
    
    const changeNavPage = (step) => {
        switch(step) {
            case 'first': pageNumber = 1;
            break;
            case 'prev': pageNumber = pageNumber > 1 ? --pageNumber : 1;
            break;
            case 'next': pageNumber = pageNumber < quantityPages ? ++pageNumber : quantityPages;
            break;
            case 'last': pageNumber = quantityPages;
            break;
            default: break;
        }
        
        if(pageNumber === 1) {
            navigate('./')
        } else {
            navigate('?page=' + pageNumber)
        }
    }

    return (
        <div className="pagination">
            <div className="pagination__btn btn_first" title='first page' onClick={() => changeNavPage('first')}>< SignInIcon size={32} /></div>
            <div className="pagination__btn btn_prev" title='previous page' onClick={() => changeNavPage('prev')}>< TriangleLeftIcon size={48} /></div>
            <div className="pagination__current" title='current page'>{ pageNumber }</div>
            <div className="pagination__btn btn_next" title='next page' onClick={() => changeNavPage('next')}>< TriangleRightIcon size={48} /></div>
            <div className="pagination__btn btn_last" title='last page' onClick={() => changeNavPage('last')}>< SignInIcon size={32} /></div>
        </div>
    )
}