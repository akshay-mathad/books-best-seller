import React, { useState } from 'react';
import { data } from '../src/data';
import './3-useState-array.css'

  const UseStateArray = () => {
    const [people, setPeople] = useState(data);
  
  return (
    <>
    {people.map((person)=>{
      const {rank,image,bookTitle,author,rating,cover,price,link} = person;
      return (
        <divi>

          <book id="book">
            <rank id="rank" className="book">#{rank}</rank><br></br>
            <img src={image} alt="" id="image" className="book"></img><br></br>

            <bookTitle id="bookTitle" className="book">{bookTitle}</bookTitle><br></br>
            {/* <h2>{title}</h2> */}
            <author id="author" className="book">Author:{author}</author><br></br>
            <rating id="rating" className="book">Rating:{rating}</rating><br></br>
            <cover>{cover}</cover><br></br>
            <price id="price" className="book">${price}</price><br></br>
            <button id="view" onClick={() => window.open(link, '_blank')}>View</button>
          </book><br></br>
        </divi>
        
      )
    })}
    </>
  );
  };
export default UseStateArray;
