
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getReviews, orderAscDes, filterReviews } from "../../redux/Actions/actions-Feedback";
import Pagination from './Paginado'

function Reviews(){
    const dispatch = useDispatch();
    const everyReview = useSelector((state)=> state.reviews.reviews)
    const filteredReviews = useSelector((state)=> state.reviews.allReviews)
    const [order, setOrder] = useState({stars: "0"})
    const [currentPage, setCurrentPage] = useState(1) 
    const [reviewsPerPage, setReviewsPerPage] = useState(5)
    const indexOfLastReview = currentPage * reviewsPerPage
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage 
    const currentReview = everyReview.slice(indexOfFirstReview, indexOfLastReview)

    useEffect(()=>{
        dispatch(getReviews())
        dispatch(orderAscDes())
        dispatch(filterReviews())
    }, [dispatch])

    const pagination = (pageNumber)=>{
        setCurrentPage(pageNumber)
        setReviewsPerPage(reviewsPerPage)
    }

    function handleSort(e){
        e.preventDefault();
        setOrder(() => {
            return {
                ...order,
                [e.target.name]: e.target.value
            }
        })
        dispatch(orderAscDes(e.target.value));
    }

    function handleFilterCreated(e){
        e.preventDefault()
        setOrder(() => {
            return {
                ...order,
                [e.target.name]: e.target.value
            }
        })
        dispatch(filterReviews(e.target.value))
    }


    return(
        <div>
            <div>Filtrar
                <div>
                <select name= "stars" value = {order.stars} onChange = {e => handleFilterCreated(e)}>
                    <option value="All">All</option>
                    <option value="1">1 estrella</option>
                    <option value="2">2 estrella</option>
                    <option value="3">3 estrella</option>
                    <option value="4">4 estrella</option>
                    <option value="5">5 estrella</option>
                </select>
                </div>
                <div>
                <select onChange = {e=> handleSort(e)}>
                    <option value = "ascendent">Menor a Mayor</option>
                    <option value = "descendent">Mayor a Menor</option>
                </select>
                </div>
            </div>
            <div>
            {currentReview.length && currentReview.map((review, index)=>{
                        return(
                        <div  key={index}>
                            
                             <h2> 
                            {review.profesor? `profesor: ${review.profesor}` : ""} 
                            {review.event? `event: ${review.event}` : ""}                             
                            {review.gym? `gym: ${review.event}` :  ""} 
                            value: {review.value}
                            </h2>
                            <h3>review: {review.review} </h3>
                        </div>
                    )})
                }
            </div>


             <Pagination reviewsPerPage = {reviewsPerPage}
                            everyReview = {filteredReviews.length}
                            pagination = {pagination}
                /> 

        </div>
    )
}

export default Reviews