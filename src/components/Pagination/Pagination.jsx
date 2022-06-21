import { SignInIcon, TriangleLeftIcon, TriangleRightIcon } from '@primer/octicons-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './pagination.css';

export const Pagination = ({ currentPage, totalPages }) => {
    const navigate = useNavigate();
    let currentValuePage = currentPage;

    useEffect(() => {
        navigate('./')
    }, [])
    const changeNavPage = (step) => {
        switch(step) {
            case 'first': currentValuePage = 1;
            break;
            case 'prev': currentValuePage = currentPage > 1 ? --currentPage : 1;
            break;
            case 'next': currentValuePage = currentPage < totalPages ? ++currentPage : totalPages;
            break;
            case 'last': currentValuePage = totalPages;
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
            <div className={currentValuePage === 1 ? "pagination__btn btn_first disabled" : "pagination__btn btn_first"} title="first page" onClick={() => changeNavPage('first')}>
                < SignInIcon size={32} />
            </div>
            <div className={currentValuePage === 1 ? "pagination__btn btn_prev disabled" : "pagination__btn btn_prev"} title="previous page" onClick={() => changeNavPage('prev')}>
                < TriangleLeftIcon size={48} />
            </div>
            <div className="pagination__current" title='current page'>
                { currentValuePage }
            </div>
            <div className={currentValuePage === totalPages ? "pagination__btn btn_next disabled" : "pagination__btn btn_next"} title="next page" onClick={() => changeNavPage('next')}>
                < TriangleRightIcon size={48} />
            </div>
            <div className={currentValuePage === totalPages ? "pagination__btn btn_last disabled" : "pagination__btn btn_last"} title="last page" onClick={() => changeNavPage('last')}>
                < SignInIcon size={32} />
            </div>
        </div>
    )
}