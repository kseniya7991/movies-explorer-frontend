import React from 'react';

import './EmptyMoviesList.css';

function EmptyMoviesList({ isEmpty, text }) {
  if (!isEmpty) {
    return null;
  }
  return <p className="emptyMoviesList">{text}&nbsp;&#128270;</p>;
}

export default EmptyMoviesList;
