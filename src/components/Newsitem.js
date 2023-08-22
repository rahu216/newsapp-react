import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title,description,imgurl,urll,author,time}=this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imgurl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a href={urll} target="_blank" className="btn btn-primary">Read More</a>
                            <p className="card-text"><small class="text-body-secondary">Written by{author?author:"unknown"} on{time}</small></p>
                        </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
