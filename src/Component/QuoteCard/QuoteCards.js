import React from 'react'
import './style.css'
import Loader from '../Loader/Loader'

const QuoteCards = ({btnClick , quote , loading}) => {

  // Loader
    const loaderHandling = ()=> {
      if (!loading) return quote;
      else return <Loader/>;
    };
  return (
    <>
      <div className='quote__card--container'>
        <h3 className='quote__card--header'>Quote</h3>
        <p className='quote__card--quote'>{loaderHandling()}</p>
        <div className='quote__card--line'>
          <p className='card__line card__line--1'></p>
          <p className='card__line--2'></p>
          <p className='card__line card__line--3'></p>
        </div>
        <button onClick={btnClick} className='quote__card--btn'>Get Quote</button>
      </div>
    </>
  )
}

export default QuoteCards
