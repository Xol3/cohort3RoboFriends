import React from 'react';
import Card from './Card.js';
//creates the cardlist components passing in the array with objects
const CardList = ({robots}) => {
 // map => repeate the return of a card till it renders all of the objects in the arr
  return (
    <div>
      {
        robots.map((users, i) => {
            return (
              <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
            )
          })
      }
    </div>
  )
}
export default CardList
