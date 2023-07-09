import React from 'react';

function Body({ imageData }) {
  return (
    <div>
      {imageData.map(image => (
        <div key={image.id} className="column">
          <img src={image.img} alt=""></img>
        </div>
      ))}
    </div>
  );
}

export default Body;
