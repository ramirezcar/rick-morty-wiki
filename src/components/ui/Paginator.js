import React, { useState } from 'react'
import { PageItem, Pagination } from 'react-bootstrap';

export default function Paginator({ totalPages = 0, handleClick }) {
  const [active, setActive] = useState(1)

  const onClick = (e) => {
    handleClick(e)
    setActive(Number(e.target.id))
  }

  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <PageItem id={number} key={number} active={number === active} onClick={onClick}>
        {number}
      </PageItem>,
    );
  }

  return (
    <div className='d-flex'>
      <Pagination size="sm" className='mx-auto'>{items}</Pagination>
    </div>
  )
}
