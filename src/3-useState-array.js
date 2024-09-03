import React, { useState } from 'react';
import { data } from '../src/data';
import './3-useState-array.css'

  const UseStateArray = () => {
    const [people, setPeople] = useState(data);
  
    const removeItem = (id) => {
      let newPeople = people.filter((person) => person.id !== id);
      setPeople(newPeople);
    };
  
  return (
    <>
    {people.map((person)=>{
      const {rank,image,bookTitle,author,rating,cover,price,link} = person;
      return (
        <divi>
          {/* <h6>#{rank}</h6> */}
          {/* <img src={image}></img> */}
          {/* <h4>{title}</h4> */}
          {/* <h2>{author}</h2> */}
          {/* <h4>{rating}</h4> */}
          {/* <h4>{price}</h4> */}
          {/* <button onClick={() => removeItem(rank)}>remove</button> */}

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
