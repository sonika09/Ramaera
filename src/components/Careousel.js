import React from 'react'

function Careousel() {
  return (
    <div>
      <div id="demo" className="carousel slide" data-bs-ride="carousel">


  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1671154453575-b0cea38bb19a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Los Angeles" className="d-block" style={{width:"100%"}}/>
      <div className="carousel-caption">
    <img src="./mainHeading.png" className='mainHeadingImg'></img>
    <p className='description1'>
        We are aiming to be a part of the major industrialisation drive in India
        and embarking our presence in every significant industrial domain
        including IT.
      </p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1597839219216-a773cb2473e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Chicago" className="d-block" style={{width:"100%"}}/>
      <div className="carousel-caption">
      <img src="./mainHeading.png" className='mainHeadingImg'></img>
    <p className='description1'>
        We are aiming to be a part of the major industrialisation drive in India
        and embarking our presence in every significant industrial domain
        including IT.
      </p>
      </div> 
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1547127796-06bb04e4b315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="New York" className="d-block" style={{width:"100%"}}/>
      <div className="carousel-caption">
      <img src="./mainHeading.png" className='mainHeadingImg'></img>
    <p className='description1'>
        We are aiming to be a part of the major industrialisation drive in India
        and embarking our presence in every significant industrial domain
        including IT.
      </p>
      </div>  
    </div>
  </div>
  

  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>
    </div>
  )
}

export default Careousel