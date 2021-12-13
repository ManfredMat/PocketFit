
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getReviews, orderAscDes, filterReviews } from "../../redux/Actions/actions-Feedback";
import Pagination from './Paginado'

function Reviews(){
    const dispatch = useDispatch();
    const everyReview = useSelector((state)=> state.reviews.reviews)
    const filteredReviews = useSelector((state)=> state.allReviews)
    const [order, setOrder] = useState('')
    const [currentPage, setCurrentPage] = useState(1) 
    const [reviewsPerPage, setReviewsPerPage] = useState(20)
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
        dispatch(orderAscDes(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value)
    }

    function handleFilterCreated(e){
        e.preventDefault()
        dispatch(filterReviews(e.target.value))
        everyReview(e.target.value)
    }

    return(
        <div>
            <div>Filtrar
                <select value = {filterReviews} onChange = {e => handleFilterCreated(e)}>
                    <option>1 estrella</option>
                    <option>2 estrella</option>
                    <option>3 estrella</option>
                    <option>4 estrella</option>
                    <option>5 estrella</option>
                </select>
                <select value = {orderAscDes} onChange = {e=> handleSort(e)}>
                    <option>Menor a Mayor</option>
                    <option>Mayor a Mayor</option>
                </select>
            </div>
            <div>
            {currentReview.length && currentReview.map((review, index)=>{
                        return(
                        <div  key={index}>
                            
                             <div> review: {review.review} </div>
                             <div> value: {review.value} </div>
                              <div>{review.profesor? `profesor: ${review.profesor}` : ""} </div>
                             <div> {review.event? `event: ${review.event}` : ""} </div>
                             <div> {review.gym? `gym: ${review.event}` :  ""} </div>
                            
                        </div>
                    )})
                }
            </div>


             {/* <Pagination reviewsPerPage = {reviewsPerPage}
                            everyReview = {filteredReviews.length}
                            pagination = {pagination}
                />  */}

        </div>
    )
}

export default Reviews