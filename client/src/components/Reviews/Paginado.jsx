import React from "react";


export default function Pagination({reviewsPerPage, everyReview, pagination}){
    const pageNumber = [];

    for(let i = 1; i <= Math.ceil(everyReview / reviewsPerPage); i++){
        pageNumber.push(i)
    }

    return(
        <div >
            <ul >
                {pageNumber  && pageNumber.map(number =>{
                    return(
                    <li key = {number} >
                    <button  onClick = {()=> pagination(number)} > {number} </button>
                    </li>)
                })}
            </ul>
        </div>
    )
}