import React, {Component} from 'react';

export default class Comment extends Component{
    render(){
        return(
            <ul>
                <li>
                    <div className ="con-mian clearfix">
                        <div className="com-pic">
                             <img src= {require('../../common/img/matthew.png')} alt="" />
                        </div>
                        <div className="com-text">
                            <b>matthew</b><em>12:10</em>
                            <p>How are you</p>
                            <span>回复</span>
                        </div>
                    </div>
                </li>
            </ul>
        )
    }
}