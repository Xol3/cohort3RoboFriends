import  React from 'react';
// creating individual cards from the properties in the passing arguments
const Card = ({name, email, id}) => {
  return(
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-9 dim'>
      <img alt="robots" src={`https://robohash.org/${id}?100x100`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card;
