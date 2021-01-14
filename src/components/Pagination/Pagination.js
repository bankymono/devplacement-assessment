import {IoCloudDownloadSharp}  from 'react-icons/io5'
import React from 'react'
import './Pagination.css'
import {BiChevronRight, BiChevronLeft} from 'react-icons/bi'

const Pagination = ({currentUsers, currentPage,setCurrentPage,usersPerPage,totalUsers}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++){
        pageNumbers.push(i);
    }

    // converts an array object to csv
    const objectToCsv = (users) =>{
        const csvRows = [];

        const headers = Object.keys(users[0]);
        console.log(headers)
        csvRows.push(headers.join(','));

        for(const row of users){
            const values = headers.map(header =>{
                const escaped = (''+row[header]).replace(/"/g,'\\"');
                return `"${escaped}"`;
            });

            csvRows.push(values.join(','));
        }

        return csvRows.join('\n')
    }

    // downloads csv
    const downloadCsv = (data) =>{
        console.log(data)
        const a = document.createElement('a')
        a.setAttribute('hidden', true);
        a.setAttribute('href','data:attachment/csv,' + data);
        a.setAttribute('target', '_Blank');
        a.setAttribute('download','users.csv');
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    // gets the user the report at the click of a button
    const getReport = (e) =>{
        if(currentUsers === null){
            e.target.disabled = true

        }else{

        
        const data = currentUsers.map( user => ({
            name: `${user.name.first} ${user.name.last}`,
            address: `${user.location.street.number} ${user.location.street.name} ${user.location.city} ${user.location.state} ${user.location.country}`,
            email:`${user.email}`,
            telephone:`${user.cell}`
        }))
        const csvData = objectToCsv(data)
        downloadCsv(csvData)
    }
}

    return (
        <div>
            <div className="pagination-container">
                <div    onClick={getReport} style={currentUsers===null?{
                                backgroundColor:'#c2a7bb'
                            }:null} 
                        className="download-link"><IoCloudDownloadSharp />Download Results</div>
                
                {/* contains navigation button for paignation */}
                <div className="pagination-button-container">
                    <button className="left" style={currentUsers===null?{
                                    backgroundColor:'#ededf0'
                                }:null} 
                            disabled={currentPage === 1 || currentPage === null? true: false} onClick={()=> setCurrentPage(currentPage - 1)}><BiChevronLeft size="1.2rem" color="#262A41"/></button>
                    <button className="right" style={currentUsers===null?{
                                    backgroundColor:'#898b9c'
                                }:null} 
                            disabled={currentPage === Math.ceil(totalUsers / usersPerPage)||currentPage === null? true: false}onClick={()=> setCurrentPage(currentPage + 1)}><BiChevronRight size="1.2rem" color="#E2E2EA" /></button>
                </div>
            </div>
        </div>
    )
}

export default Pagination
