import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getReviews, orderAscDes, filterReviews } from "../../redux/Actions/actions-Feedback";
import Pagination from './Paginado'
import Style from "./Reviews.styles";
import EstrellaAmarilla from "../../assets/img/iconos/reviews/Star1.svg"
import EstrellaNegra from "../../assets/img/iconos/reviews/Star5.svg"

function Reviews(){
    const dispatch = useDispatch();
    const everyReview = useSelector((state)=> state.reviews.reviews)
    const filteredReviews = useSelector((state)=> state.reviews.allReviews)
    const [order, setOrder] = useState({stars: "0"})
    const [currentPage, setCurrentPage] = useState(1) 
    const [reviewsPerPage, setReviewsPerPage] = useState(5)
    const indexOfLastReview = currentPage * reviewsPerPage
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage 
    const currentReview = everyReview.length && everyReview.slice(indexOfFirstReview, indexOfLastReview) 

    let unArray = [1,2,3,4,5]

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
        <>
        <Style.GlobalStyle/>
        <Style.Container>
            <Style.Titulo>Reseñas</Style.Titulo>
            <Style.Barra>Ordenar
                <Style.Filter onChange = {e=> handleSort(e)}>
                    <option value = "ascendent">Menor a Mayor</option>
                    <option value = "descendent">Mayor a Menor</option>
                </Style.Filter>
                Filtrar
                <Style.Filter name= "stars" value = {order.stars} onChange = {e => handleFilterCreated(e)}>
                    <option value="All">All</option>
                    <option value="1">1 estrella</option>
                    <option value="2">2 estrella</option>
                    <option value="3">3 estrella</option>
                    <option value="4">4 estrella</option>
                    <option value="5">5 estrella</option>
                </Style.Filter>
            </Style.Barra>
     
            <div>
            {currentReview.length && currentReview.map((review, index)=>{
                        return(
                        <Style.Card  key={index}>
                            <>
                             <Style.DivBarra> 
                            <Style.Type3>
                            <Style.Type >
                            {review.profesor? `Profesor: ${review.profesor}` : ""} 
                            {review.event? `Event: ${review.event}` : ""}                             
                            {review.gym? `GYM:` :  ""}
                            </Style.Type>
                            <Style.Type2>{review.subject}</Style.Type2>
                            </Style.Type3>
                            <div style={{width: "14%", display: 'flex',justifyContent: "flex-end", marginLeft: "1em"} }>{unArray.map((e, index)=>
                                e <= review.value ? <Style.Estrellita src={EstrellaAmarilla} alt="Star" key={index}/>  : <Style.Estrellita src={EstrellaNegra} alt="Star Empty" key={index}/>
                            )}</div>
                            </Style.DivBarra>
                           
                            
                            <Style.InnerCard>{review.review} </Style.InnerCard>
                            </>
                        </Style.Card >
                    )})
                }
            </div>


             <Pagination reviewsPerPage = {reviewsPerPage}
                            everyReview = {filteredReviews.length}
                            pagination = {pagination}
                /> 

        </Style.Container>
      
        </>
    )
}

export default Reviews