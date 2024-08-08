import {logo} from '../assets';
import React from 'react'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src ={logo} alt="sumz_logo" className=" w-28 object-contain"/>
        <button
        type="button"
        onClick={()=> window.open('https://github.com/muskansharma1610')}
        className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br classname="max-md:hidden"/>
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 classname="desc">
        Simplify your reading with summize ,an open- source article summariser that transforms 
        lengthy articles into clear and concise summaries
      </h2>
    </header>
  )
}

export default Hero