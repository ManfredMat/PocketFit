import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getReviews, orderAscDes, filterReviews } from "../../redux/Actions/actions-Feedback";
import Pagination from './Paginado'
import Review from './Review'

function Reviews(){
    const dispatch = useDispatch();
    const everyReview = useSelector((state)=> state.reviews)
    const filteredReviews = useSelector((state)=> state.allReviews)
    const [order, setOrder] = useState('')
    //const [currentPage, setCurrentPage] = useState(1) 
    //const [reviewsPerPage, setReviewsPerPage] = useState(6)
    //const indexOfLastReview = currentPage * reviewsPerPage
    //const indexOfFirstReview = indexOfLastReview - reviewsPerPage 
    //const currentReview = everyReview.slice(indexOfFirstReview, indexOfLastReview)

    useEffect(()=>{
        dispatch(getReviews())
        dispatch(orderAscDes())
        dispatch(filterReviews())
    }, [dispatch])

    // const pagination = (pageNumber)=>{
    //     setCurrentPage(pageNumber)
    //     setReviewsPerPage(reviewsPerPage)
    // }

    function handleSort(e){
        e.preventDefault();
        dispatch(orderAscDes(e.target.value));
        //setCurrentPage(1);
        setOrder(e.target.value)
    }

    function handleFilterCreated(e){
        e.preventDefault()
        dispatch(filterReviews(e.target.value))
        filteredReviews(e.target.value)
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
            {everyReview?.map((review, index)=>{
                        return(
                        <div  key={index}>
                            
                             <div> review = {review.review} </div>
                             <div> value = {review.value} </div>
                              <div>profesor = {review.profesor} </div>
                             <div> event = {review.event} </div>
                             <div> gym = {review.gym} </div>
                            
                        </div>
                    )})
                }
            </div>


            {/* <Pagination reviewsPerPage = {reviewsPerPage}
                            everyReview = {everyReview.length}
                            pagination = {pagination}
                /> */}

        </div>
    )
}

export default Reviews