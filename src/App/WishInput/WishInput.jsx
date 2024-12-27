import React, { useState } from 'react';
import PropTypes from 'prop-types';

const WishInput = ({ onNewWish }) => {
  const [newWishText, setNewWishText] = useState('');
  return (

    <fieldset className="wish-input">
      <legend className="wish-input__label">New wish</legend>
      <input
        className="wish-input__field"
        placeholder="Enter your wish here"
        value={newWishText}
        onChange={e => setNewWishText(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter' && newWishText.length) {
            onNewWish({ done: false, text: newWishText });
            setNewWishText(''); // limpiamos el contenido del input una vez avisado al padre de que el evento onNewWish se ha creado
          }
        }}
      />
    </fieldset>
  );
};
WishInput.propTypes = {
  onNewWish: PropTypes.func, // callback declarado como propiedad de tipo funcion
};
WishInput.defaultProps = {
  onNewWish: () => {}, // deja la propiedad como opcional y el valor x defecto es fun vacia
};

export default WishInput;
