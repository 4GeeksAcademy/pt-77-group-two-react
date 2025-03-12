import React from "react";

const Cards = (props) => { 
    return (

            <div className="card" style={{height:"45rem", marginLeft:".5rem", width:"15rem"}} >
                <img src={props.img} className="card-img-top" height='250px' alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.content}</p>
                    <a href="#" className="btn btn-primary position-absolute bottom-0 start-50 translate-middle-x mb-3 w-75">{props.btton}</a>
                </div>
            </div>

        
    );
};

export default Cards;