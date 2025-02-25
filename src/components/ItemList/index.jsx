import React from 'react';
import './styles.css';

function ItemList({ title, link, description }) {
  return (
    <div className='item-list'>
      <a className='repo-link' href={link} target="_blank" rel="noopener noreferrer">
        <strong className='repo-title'>{title}</strong>
      </a>
      <p>{description}</p>
      <hr />
    </div>
  );
}

export default ItemList;
