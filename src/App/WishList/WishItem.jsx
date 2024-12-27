import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const WishItem = ({
  done, text, id, onDoneChange,
}) => {
  const [age, setAge] = useState(0);

  useEffect(() => { // callback que inicaliza un temporizador
    let ageInterval;
    if (done) {
      setAge(0);
    } else {
      ageInterval = setInterval(() => {
        if (done) { // por si se da el caso de que se ha completado el done
          clearInterval(ageInterval);
        } else {
          setAge(a => a + 1); // a puede sustituirse por age pero tb
        } // tendria que incluirse como dependencia del useEffect pq age esta fuera del callback
      }, 1000);
    } // posibiliad de retornar un función de destrucción cuando se destruye el componente:
    return () => clearInterval(ageInterval); // si se destruye el compte antes de terminar el inter
  }, [done]);

  return (
    <li
      className={classNames('wish-list__item', {
        'wish-list__item--done': done,
        'wish-list__item--warning': age >= 5 && age < 10, // crear clase en App.css
        'wish-list__item--danger': age >= 10, // "   " en App.css
      })}
    >
      <input id={id} checked={done} onChange={e => onDoneChange(e.target.checked)} type="checkbox" />
      <label htmlFor={id}>{text}</label>
    </li>
  );
};
WishItem.propTypes = {
  done: PropTypes.bool,
  text: PropTypes.string,
  id: PropTypes.string,
  onDoneChange: PropTypes.func,
};
WishItem.defaultProps = {
  done: false,
  text: '',
  id: '',
  onDoneChange: () => {}, // inicializada por defecto como una funcion vacia
};

export default WishItem;
