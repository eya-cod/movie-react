import React from 'react';

const Rating = ({ Rate, setRateFilter }) => {
  const stars = (x) => {
    let starsArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= x) {
        starsArray.push(
          <span onChange={()=>setRateFilter(i) } >
            ★
          </span>
        );
      } else {
        starsArray.push(
          <span onChange={()=>setRateFilter(i) }>
            ☆
          </span>
        );
      }
    }
    return starsArray;
  };
  return <div>{stars(Rate)}</div>;
};

Rating.defaultProps = {
  setRateFilter: () => {},
};

export default Rating;
