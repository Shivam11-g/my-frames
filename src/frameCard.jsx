import React from 'react';
import img from './s.jpg'
function Card (props) {

    

    return(
<div id="frame-card" className="card m-1 my-3 py-2" style={{width: '22rem'}}>
  <span style={{left: 280, position: 'relative'}}>{props.wishlisted} <svg width="1.4em" height="1.4em" viewBox="0 0 16 16" className="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
    </svg></span>
  <img src={props.image} className="card-img-top img-responsive" alt="img"  />
  <div className="card-body" style={{marginBottom: '-40px'}}>
    <p style={{fontSize: 11}}>
      <span style={{fontWeight: 'bold'}}>{props.brand}</span> <span style={{float: 'right'}}>Color: {props.color}</span></p><p style={{fontSize: 12}}>{"\n"}</p>
    
    
    <span style={{borderRadius: 10, backgroundColor: 'dodgerblue', color: 'white', padding: 2, paddingRight: 2, fontSize: 12}}>{props.rating} <svg width=".8em" height=".8em" viewBox="0 0 16 16" className="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
      </svg></span><span className="text-muted" style={{fontSize: 12}}>|{props.bought} bought</span> <span style={{fontSize: 12, float: 'right'}}>Frame Type: {props.frameType}</span>
    <p style={{fontSize: 12}}>{"\n"}</p>

    <span style={{fontSize: 12}}>Rs {props.newPrice} </span><del style={{fontSize: 12}} className="text-muted">{props.oldPrice}</del>
    <span style={{fontSize: 12, float: 'right'}}>Frame Shape: {props.frameShape}</span>
    <p>
    </p></div>
</div>


// <div className="card m-4 p-2" style={{width: '21rem'}}>
//   <img src={img} className="card-img-top img-responsive" alt="img" style={{width: '19rem'}} />
//   <div className="card-body">
//     <p className="card-text">
//         Some quick example text to build on the card title and make up the bulk of the card's content.
//     </p>
//   </div>
// </div>

    )
}

export default Card;