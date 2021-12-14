import React from "react";
import Style from "./Paginado.styles";


export default function Pagination({reviewsPerPage, everyReview, pagination}){
    const pageNumber = [];

    for(let i = 1; i <= Math.ceil(everyReview / reviewsPerPage); i++){
        pageNumber.push(i)
    }

    return(
        <>
        
            <Style.Unorder >
                {pageNumber  && pageNumber.map(number =>{
                    return(
                    <Style.Order key = {number} >
                    <Style.Button  onClick = {()=> pagination(number)} ><p>{number} </p> </Style.Button>
                    </Style.Order>)
                })}
            </Style.Unorder>
        
        </>
    )
}