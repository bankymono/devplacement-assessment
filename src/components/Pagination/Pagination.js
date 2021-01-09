import React from 'react'

const Pagination = ({currentPage,setCurrentPage,usersPerPage,totalUsers}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <div>
            <div>
                <button disabled={currentPage == 1? true: false} onClick={()=> setCurrentPage(currentPage - 1)}>Previous</button>
                <button disabled={currentPage == Math.ceil(totalUsers / usersPerPage)? true: false}onClick={()=> setCurrentPage(currentPage + 1)}>Next</button>
            </div>
        </div>
    )
}

export default Pagination
