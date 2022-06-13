import { SignInIcon, TriangleLeftIcon, TriangleRightIcon } from '@primer/octicons-react';
import { useLocation, useNavigate } from 'react-router-dom'
import './pagination.css'

export const Pagination = ({numPage, setNumbPage}) => {
    const navigate = useNavigate();
    const loaction = useLocation();

    const navJ = () => {
        console.log(loaction.search)
        let num = numPage + 1;
        navigate('?page=' + num)
        setNumbPage(num)
    }

    return (
        <div className="pagination">
            <div className="pagination__btn btn_first" title='first page' onClick={() => navJ()}>< SignInIcon size={32} /></div>
            <div className="pagination__btn btn_prev" title='previous page'>< TriangleLeftIcon size={48} /></div>
            <div className="pagination__current" title='current page'>{numPage}</div>
            <div className="pagination__btn btn_next" title='next page'>< TriangleRightIcon size={48} /></div>
            <div className="pagination__btn btn_last" title='last page'>< SignInIcon size={32} /></div>
        </div>
    )
}