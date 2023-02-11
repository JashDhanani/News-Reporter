import React from 'react'
import './Sidebar.css'
import { Link } from "react-router-dom"
import { useState } from 'react'

function Sidebar() {
  let [stxt, setStxt] = useState("")

  const changeTxt = (e)=>{
      setStxt(e.target.value)
  }

  const searchTxt = ()=>{
    console.log(stxt)
  }

    return (
      <div className='mainSide'>
        <div className="side1">
          <h3>News Reporter</h3>
          <form action="">
            <input className='search' onChange={changeTxt} value={stxt} type="text" placeholder='   Search here...' />
            <Link to={"/searchresult"}><button className='sBtn' onClick={searchTxt}><span className="material-symbols-outlined">
              search
            </span></button></Link>
          </form>
        </div>
        <div className="side2">
          <h3 id='head2'>Get News From Diffrent Country</h3>
          <Link to="/india"><button className='sideBtn' catagory={"in"}>India</button></Link><br />
          <Link to="/rusia"><button className='sideBtn' catagory={"ru"}>Rusia</button></Link><br />
          <Link to="/us"><button className='sideBtn' catagory={"us"}>United States</button></Link><br />
          <Link to="/france"><button className='sideBtn' catagory={"fr"}>France</button></Link><br />
          <Link to="/germany"><button className='sideBtn' catagory={"de"}>Germany</button></Link><br />
        </div>
        <div className="side3">
          <h3 id='head2'>Get News From Form Diffrent Channel</h3>
          <Link to="/hinustantimes"><button className='sideBtn' source={"hindustan-times"}>Hindustan Times</button></Link><br />
          <Link to="/thetmesofindia"><button className='sideBtn' source={"the-times-of-india"}>The Times of India</button></Link><br />
          <Link to="/bbcnews"><button className='sideBtn' source={"bbc-news"}>BBC News</button></Link><br />
          <Link to="/ndtvnews"><button className='sideBtn' source={"ndtv-news"}>NDTV News</button></Link><br />
        </div>

        {/* <p className='ok'>Thank You!</p> */}
      </div>
    )
  }

  export default Sidebar;
