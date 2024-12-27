import React from 'react';
import PropTypes from 'prop-types';
import WishItem from './WishItem';

const WishList = ({ wishes, onWishesChange }) => (
  <ul className="wish-list">
    {wishes.map(({ done, text }, i) => (
      <WishItem
        text={text}
        done={done}
        id={`wisht${i}`}
        key={text}
        onDoneChange={(value) => {
          const updatedWishes = [...wishes]; // no modificamos el array que recibimos por prop
          updatedWishes[i].done = value;
          onWishesChange(updatedWishes);
        }}
      />
    ))}
  </ul>
);

WishList.propTypes = {
  wishes: PropTypes.arrayOf(PropTypes.shape(WishItem.propTypes)),
  onWishesChange: PropTypes.func,
};

WishList.defaultProps = {
  wishes: [],
  onWishesChange: () => {},
};

export default WishList;
