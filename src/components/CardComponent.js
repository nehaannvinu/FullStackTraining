import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.user.id}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.user.userId}</h6>
                <p className="card-text">{props.user.title}</p>
            </div>
        </div>
    )
}

export default Card