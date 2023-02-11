import React, { Component } from 'react'
import NewsItem from './NewsItem'
import './News.css'

export default class News extends Component {

    constructor() {
        super();
        // console.log("This is Constructor")
        this.state = {
            articles: [],
            loadng: false,
            page: 1
        }
    }

    async componentDidMount() {
        this.props.setProgress(10)
        let newUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.catagory}&apiKey=efa724b21f3d45d19e812ad7f8c4d992&page=1&pageSize=${this.props.pageSize}`
        let data = await fetch(newUrl)
        let data2 = await data.json()
        this.setState({
            articles: data2.articles,
            totalResults: data2.totalResults
        })
        this.props.setProgress(100)
    }

    previousPage = async () => {
        this.props.setProgress(10)
        let newUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.catagory}&apiKey=efa724b21f3d45d19e812ad7f8c4d992&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        let data = await fetch(newUrl)
        let data2 = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: data2.articles
        })
        document.documentElement.scrollTop = 0
        this.props.setProgress(100)
    }

    nextPage = async () => {
        this.props.setProgress(10)
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

        }
        else {
            let newUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.catagory}&apiKey=efa724b21f3d45d19e812ad7f8c4d992&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
            let data = await fetch(newUrl)
            let data2 = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: data2.articles
            })
        }
        document.documentElement.scrollTop = 0
        this.props.setProgress(100)
    }

    gotoPage1 = async () => {
        this.props.setProgress(10)
        let newUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.catagory}&apiKey=efa724b21f3d45d19e812ad7f8c4d992&page=1&pageSize=${this.props.pageSize}`
        let data = await fetch(newUrl)
        let data2 = await data.json()
        this.setState({
            page: 1,
            articles: data2.articles
        })
        document.documentElement.scrollTop = 0
        this.props.setProgress(100)
    }
    gotoPage2 = async () => {
        this.props.setProgress(10)
        let newUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.catagory}&apiKey=efa724b21f3d45d19e812ad7f8c4d992&page=2&pageSize=${this.props.pageSize}`
        let data = await fetch(newUrl)
        let data2 = await data.json()
        this.setState({
            page: 2,
            articles: data2.articles
        })
        document.documentElement.scrollTop = 0
        this.props.setProgress(100)
    }
    gotoPage3 = async () => {
        this.props.setProgress(10)
        let newUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.catagory}&apiKey=efa724b21f3d45d19e812ad7f8c4d992&page=3&pageSize=${this.props.pageSize}`
        let data = await fetch(newUrl)
        let data2 = await data.json()
        this.setState({
            page: 3,
            articles: data2.articles
        })
        document.documentElement.scrollTop = 0
        this.props.setProgress(100)
    }
    gotoPage4 = async () => {
        this.props.setProgress(10)
        let newUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.catagory}&apiKey=efa724b21f3d45d19e812ad7f8c4d992&page=4&pageSize=${this.props.pageSize}`
        let data = await fetch(newUrl)
        let data2 = await data.json()
        this.setState({
            page: 4,
            articles: data2.articles
        })
        document.documentElement.scrollTop = 0
        this.props.setProgress(100)
    }
    gotoPage5 = async () => {
        this.props.setProgress(10)
        let newUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.catagory}&apiKey=efa724b21f3d45d19e812ad7f8c4d992&page=5&pageSize=${this.props.pageSize}`
        let data = await fetch(newUrl)
        let data2 = await data.json()
        this.setState({
            page: 5,
            articles: data2.articles
        })
        document.documentElement.scrollTop = 0
        this.props.setProgress(100)
    }
    gotoPage6 = async () => {
        this.props.setProgress(10)
        let newUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.catagory}&apiKey=efa724b21f3d45d19e812ad7f8c4d992&page=6&pageSize=${this.props.pageSize}`
        let data = await fetch(newUrl)
        let data2 = await data.json()
        this.setState({
            page: 6,
            articles: data2.articles
        })
        document.documentElement.scrollTop = 0
        this.props.setProgress(100)
    }
    gotoPage7 = async () => {
        this.props.setProgress(10)
        let newUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.catagory}&apiKey=efa724b21f3d45d19e812ad7f8c4d992&page=7&pageSize=${this.props.pageSize}`
        let data = await fetch(newUrl)
        let data2 = await data.json()
        this.setState({
            page: 7,
            articles: data2.articles
        })
        document.documentElement.scrollTop = 0
        this.props.setProgress(100)
    }

    render() {
        return (
            <>
                <div className="mNewsCon">
                    <div className="newsTitle">
                        <h2>Welcome to News Reporter!!</h2>
                        <p>Get updated daily by getting latest News everyday...</p>
                    </div>
                    <h3>News from {this.props.name}</h3>
                    <p>Page - {this.state.page}</p>
                    <div className="newsMcon">
                        <div className='newsCon'>
                            {this.state.articles.map((e) => {
                                // console.log(e)
                                return <div id="return" key={e.url}>
                                    <NewsItem title={e.title ? e.title.slice(0, 40) : ""} desc={e.description ? e.description.slice(0, 100) : ""} imageUrl={e.urlToImage ? e.urlToImage : "https://ik.imagekit.io/demo/medium_cafe_B1iTdD0C.jpg"} newsUrl={e.url} event={e} author={e.author} date={e.publishedAt} />
                                </div>
                            })}
                        </div>
                    </div>
                    <div className="npBtn">
                        <button disabled={this.state.page <= 1} className="btnNP" onClick={this.previousPage}>&larr; Previous</button>
                        <button className='btnNo' onClick={this.gotoPage1}>1</button>
                        <button className='btnNo' onClick={this.gotoPage2}>2</button>
                        <button className='btnNo' onClick={this.gotoPage3}>3</button>
                        <button className='btnNo' onClick={this.gotoPage4}>4</button>
                        <button className='btnNo' onClick={this.gotoPage5}>5</button>
                        <button className='btnNo' onClick={this.gotoPage6}>6</button>
                        <button className='btnNo' onClick={this.gotoPage7}>7</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btnNP" onClick={this.nextPage}>Next &rarr;</button>
                    </div>
                </div>

            </>
        )
    }
}
