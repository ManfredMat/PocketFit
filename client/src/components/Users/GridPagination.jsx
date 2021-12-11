import React from 'react';
import Styles from './UsersGrid.styles';

function GridPagination({ usersPerPage, totalUsers, paginate, currentPage }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <Styles.Pagination>
            {
                pageNumbers.map((number) =>
                    <Styles.PaginationButton
                        currentButton={currentPage === number ? true : false} 
                        key={number} 
                        onClick={() => paginate(number)}
                    >{number}</Styles.PaginationButton>
                )
            }
        </Styles.Pagination>
    )
};

export default GridPagination;
