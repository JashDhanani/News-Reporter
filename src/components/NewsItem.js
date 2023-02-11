import React, { Component } from 'react'
import './NewsItem.css'
import {Link} from "react-router-dom"

export default class NewsItem extends Component {
    render() {
        let {title, desc, imageUrl, newsUrl} = this.props

        return (
            <div className="mcon">
                <div className='con1'>
                    <div className="box1">
                        <img src={imageUrl} alt="News Tasvir" />
                        <div className="containt">
                            <p className="boxTitle"><b>{title}...</b></p>
                            <p className="boxDesc">{desc}...</p>
                            {/* <p className='author'>{this.props.author + " "+ this.props.date}</p> */}
                            <p className='date'>{this.props.date}</p>
                        </div>
                        <div className="btn">
                            <Link to={newsUrl} target = "_blank"><button>Read More</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
