
import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import QuoteCards from './Component/QuoteCard/QuoteCards'
import axios from 'axios'

const App = () => {

  const [quote ,setQuote] = useState('')
  const [loading, setLoading] = useState(false)
  useEffect (()=>{
      btnClick();

  }, [] )

  // Quote Fatch Api
  const getQuote = async () =>{
  const res = await axios ('https://api.quotable.io/random');
  return res?.data?.content;
}

// OnCLick function to change Quote
  const btnClick = async () =>{
    setLoading(true);
  const quote = await getQuote();
  if(quote){
    setQuote(quote);
  }else{
    setQuote('Something went wrong :(');
  }
    setLoading(false);
  }

// Render Quote on UI
  return (
    <>
      <Navbar/>
      <div className='container'>
      <QuoteCards btnClick={btnClick} quote={quote} loading={loading}/>
      </div>
    </>
  )
}

export default App
