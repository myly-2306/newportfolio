// Fragment is in react package taht let you include many different elements in return
import React, { Fragment } from 'react';

export const ShowCard = (show) => {
    return (
        // st up style and foormat for the card itself
        <Fragment>
            <figure>
                <img className="rounded" src={show.venueImg} alt="placeholder"></img>
            </figure>
            <div className="ml-25">
                <h2>
                    {show.venue}
                </h2>
                <p>
                    {show.desc}
                </p>
                <button className="btn btn-dark">Get Tickets</button>
            </div>
        </Fragment>
    )
}
