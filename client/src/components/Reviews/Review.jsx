import React from "react";
import { Link } from 'react-router-dom'
import { getReviews } from "../actions";
import { useDispatch} from 'react-redux';


export default function Card({review, value, profesor, event, gym,id}){
    const dispatch = useDispatch();
    return(
             <Link to={'/reviews/' + id} onClick={()=>dispatch(getReviews(id))}> 
        <div >
            <h2>{gym ? gym : event || profesor }</h2>
            <h2>{value}</h2>
            <h5>{review}</h5>
        </div>
            </Link>
    )
}

