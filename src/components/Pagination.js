import React from 'react';


const Pagination = ({ currentPage, pageNumber, onClick }) => {
    const pages = Array.apply(null, {
        length: pageNumber
    }).map((value, index) => index + 1);
    return (
        <ul className='pagination' onClick={onClick}>
            {pages.map(
                page => page === currentPage ? (
                    <li key={page} className='page page--active'>{page}</li>
                ) : (
                    <li key={page} className='page'>{page}</li>
            ))}
        </ul>
    );
}

export default Pagination;