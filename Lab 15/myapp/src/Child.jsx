




import PropTypes from 'prop-types';
import React from 'react';
function Child({ message }) {
  return <p className='pchild'>{message}</p>;
}

Child.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Child;


