import React from 'react';

import './EmptyMoviesList.css';

function EmptyMoviesList({ text }) {
  return (
    <p className="emptyMoviesList">{text}&nbsp;</p>
  );
}

export default EmptyMoviesList;
