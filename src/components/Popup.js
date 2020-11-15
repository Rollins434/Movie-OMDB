/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function Popup({selected , closePopup}) {
    return (
        <section className="popup">
            <div className="content">
            <h2> {selected.Title} <span> {selected.Year}</span></h2>
    <p className="rating"> Rating:{selected.imdbRating}</p>
    <div className="plot">
        <img src={selected.Poster}/>
        <p> {selected.Plot}
         </p>
     
      
    </div>
    <div className="actor">
        <h5>Actors</h5>
        <p> {selected.Actors} </p>
        <h5>Director</h5>
        <p> {selected.Director} </p>
    </div>
   
    <button className="close" onClick={closePopup}>Close</button>
            </div>
        </section>
    )
}

export default Popup;
