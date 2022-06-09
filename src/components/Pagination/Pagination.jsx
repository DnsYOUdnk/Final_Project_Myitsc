import { SignInIcon, TriangleLeftIcon, TriangleRightIcon } from '@primer/octicons-react'
import './pagination.css'

export const Pagination = () => {
    return (
        <div className="pagination">
            <div className="pagination__btn btn_first" title='first page'>< SignInIcon size={32} /></div>
            <div className="pagination__btn btn_prev" title='previous page'>< TriangleLeftIcon size={48} /></div>
            <div className="pagination__current" title='current page'>1</div>
            <div className="pagination__btn btn_next" title='next page'>< TriangleRightIcon size={48} /></div>
            <div className="pagination__btn btn_last" title='last page'>< SignInIcon size={32} /></div>
        </div>
    )
}