import {IoCloudDownloadSharp}  from 'react-icons/io5'
import React from 'react'
import './Pagination.css'

import {BiChevronRight, BiChevronLeft} from 'react-icons/bi'

const Pagination = ({currentPage,setCurrentPage,usersPerPage,totalUsers}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <div>
            <div className="pagination-container">
                <div className="download-link"><IoCloudDownloadSharp />Download Results</div>
                <div>
                    <button className="left" disabled={currentPage === 1? true: false} onClick={()=> setCurrentPage(currentPage - 1)}><BiChevronLeft size="1.2rem" color="#262A41"/></button>
                    <button className="right" disabled={currentPage === Math.ceil(totalUsers / usersPerPage)? true: false}onClick={()=> setCurrentPage(currentPage + 1)}><BiChevronRight size="1.2rem" color="#E2E2EA" /></button>
                </div>
            </div>
        </div>
    )
}

export default Pagination
